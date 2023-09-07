import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
import { Roles } from '../../utils/init-values/roles';
import { InternalErrors } from '../../utils/internal-errors';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { FilesService } from '../files/files.service';
import { SexService } from '../sex/sex.service';

@Injectable()
export class UsersService {
    public constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>,
        private readonly rolesService: RolesService,
        private readonly filesService: FilesService,
        private readonly sexService: SexService,
        private readonly dataSource: DataSource,
    ) {}

    private async hashPassword(password: string) {
        return bcrypt.hash(password, 10);
    }

    getAll() {
        return this.usersRepository.find({ relations: ['roles', 'sex'] });
    }

    getById(id: number): Promise<UsersEntity | null> {
        return this.usersRepository.findOne({
            where: { id },
            relations: ['roles', 'sex'],
        });
    }

    getByEmail(email: string): Promise<UsersEntity | null> {
        return this.usersRepository.findOne({
            where: { email: email.toLowerCase() },
            relations: ['roles', 'sex'],
        });
    }

    async setRefreshToken(userId: number, refreshToken: string) {
        const user = await this.usersRepository.findOne({
            where: { id: userId },
        });
        user.refreshToken = refreshToken;
        return await this.usersRepository.save(user);
    }

    async create({ name, surname, password, email }: CreateUserDto) {
        const hashPassword = password && (await this.hashPassword(password));

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const user = this.usersRepository.create({
                name,
                surname,
                hashPassword,
                email: email.toLowerCase(),
            });

            const role = await this.rolesService.findByName(Roles.User);
            if (!role) throw new Error(InternalErrors.NO_NEEDED_ROLES_IN_DB);
            user.roles = [role];
            const res = await this.usersRepository.save(user);
            await queryRunner.commitTransaction();
            return res;
        } catch (e) {
            await queryRunner.rollbackTransaction();
            throw e;
        } finally {
            await queryRunner.release();
        }
    }

    async updateProfile(
        userId: number,
        avatar: Express.Multer.File,
        dto: UpdateProfileDto,
    ) {
        const user = await this.getById(userId);

        if (avatar) {
            const { endpoint, path } = await this.filesService.setAvatar(
                avatar,
                userId,
            );
            user.avatar = endpoint;
            user.avatarPath = path;
        }

        user.name = dto.name ?? user.name;
        user.surname = dto.surname ?? user.surname;

        user.sex = dto.sex
            ? await this.sexService.findByName(dto.sex)
            : user.sex;
        user.hashPassword = dto.newPassword
            ? await this.hashPassword(dto.newPassword)
            : user.hashPassword;

        return this.usersRepository.save(user);
    }
}
