import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserErrors } from '../../utils/UserErrors';
import { LoginDto } from './dto/login.dto';
import { TokenService } from '../token/token.service';
import { ConfigService } from '@nestjs/config';
import { EnvFields } from '../../typing/EnvFields';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly configService: ConfigService,
        private readonly usersService: UsersService,
        private readonly tokenService: TokenService,
    ) {}

    async register(dto: CreateUserDto) {
        const existedUser = await this.usersService.getByEmail(dto.email);
        if (existedUser) throw new BadRequestException(UserErrors.USER_EXIST);
        return await this.usersService.create(dto);
    }

    async login(dto: LoginDto) {
        const user = await this.usersService.getByEmail(dto.email);
        if (!user) throw new BadRequestException(UserErrors.USER_NOT_EXIST);
        const validatePassword = await bcrypt.compare(
            dto.password,
            user.hashPassword,
        );
        if (!validatePassword)
            throw new BadRequestException(UserErrors.WRONG_AUTH);

        const payload = {
            id: user.id,
            email: user.email,
            roles: user.roles.map((r) => r.name),
        };

        const refreshToken = await this.tokenService.generateJwtToken(
            payload,
            +this.configService.get(EnvFields.EXPIRE_REFRESH_JWT),
        );

        const accessToken = await this.tokenService.generateJwtToken(
            payload,
            +this.configService.get(EnvFields.EXPIRE_ACCESS_JWT),
        );

        await this.usersService.setRefreshToken(user.id, refreshToken);

        return { user: payload, refreshToken, accessToken };
    }
}
