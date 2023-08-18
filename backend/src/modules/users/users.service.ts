import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
import { Roles } from '../../utils/roles';
import { InternalErrors } from '../../utils/internal-errors';

@Injectable()
export class UsersService {
    public constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>,
        private readonly rolesService: RolesService,
        private dataSource: DataSource,
    ) {}

    private async hashPassword(password: string) {
        return bcrypt.hash(password, 10);
    }

    getAll() {
        return this.usersRepository.find();
    }

    getById(id: number): Promise<UsersEntity | null> {
        return this.usersRepository.findOne({
            where: { id },
            relations: ['roles'],
        });
    }

    getByEmail(email: string): Promise<UsersEntity | null> {
        return this.usersRepository.findOne({
            where: { email: email.toLowerCase() },
            relations: ['roles'],
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
}
