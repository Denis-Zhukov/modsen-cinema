import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserErrors } from '../../utils/user-errors';
import { LoginDto } from './dto/login.dto';
import { TokenService } from '../token/token.service';
import { ConfigService } from '@nestjs/config';
import { EnvFields } from '../../utils/env-fields';
import { JwtPayload } from '../token/types';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly configService: ConfigService,
        private readonly usersService: UsersService,
        private readonly tokenService: TokenService,
    ) {}

    async verify(token: string) {
        const { verified } = await this.tokenService.verifyToken(token);
        return verified;
    }

    async register(dto: CreateUserDto) {
        const existedUser = await this.usersService.getByEmail(dto.email);
        if (existedUser) throw new BadRequestException(UserErrors.USER_EXIST);
        return await this.usersService.create(dto);
    }

    async login(dto: LoginDto) {
        const user = await this.usersService.getByEmail(dto.email);
        if (!user) throw new BadRequestException(UserErrors.USER_NOT_EXISTS);

        const validatePassword = await bcrypt.compare(
            dto.password,
            user.hashPassword,
        );
        if (!validatePassword)
            throw new BadRequestException(UserErrors.WRONG_AUTH);

        const payload: JwtPayload = {
            id: user.id,
            email: user.email,
            roles: user.roles.map(({ name }) => name),
            sex: user.sex?.name,
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

        return {
            user: {
                id: user.id,
                name: user.name,
                surname: user.surname,
                roles: user.roles,
                avatar: user.avatar,
            },
            refreshToken,
            accessToken,
        };
    }

    async oauth(name: string, surname: string, email: string) {
        let userEntity = await this.usersService.getByEmail(email);

        if (!userEntity) {
            userEntity = await this.usersService.create({
                name: name || 'Unknown',
                surname: surname || 'Unknown',
                email,
                password: null,
            });
        }

        const refreshToken = await this.tokenService.generateJwtToken(
            {
                id: userEntity.id,
                email: userEntity.email,
                roles: userEntity.roles.map(({ name }) => name),
                sex: userEntity.sex?.name,
            },
            +this.configService.get(EnvFields.EXPIRE_REFRESH_JWT),
        );

        await this.usersService.setRefreshToken(userEntity.id, refreshToken);

        return refreshToken;
    }

    async refreshAccessToken(refreshToken: string) {
        const { verified, payload } = await this.tokenService.verifyToken(
            refreshToken,
        );

        if (!verified)
            throw new UnauthorizedException(UserErrors.WRONG_REFRESH_TOKEN);

        const userEntity = await this.usersService.getById(payload.id);

        if (!userEntity || userEntity.refreshToken !== refreshToken)
            throw new UnauthorizedException(UserErrors.WRONG_REFRESH_TOKEN);

        const accessToken = await this.tokenService.generateJwtToken(
            {
                id: userEntity.id,
                email: userEntity.email,
                roles: userEntity.roles.map(({ name }) => name),
                sex: userEntity.sex?.name,
            },
            +this.configService.get(EnvFields.EXPIRE_REFRESH_JWT),
        );

        return {
            accessToken,
            id: userEntity.id,
            surname: userEntity.surname,
            name: userEntity.name,
            roles: userEntity.roles,
            sex: userEntity.sex?.name,
            avatar: userEntity.avatar,
        };
    }

    async logout(refreshToken: string) {
        const { verified, payload } = await this.tokenService.verifyToken(
            refreshToken,
        );

        if (!verified)
            throw new BadRequestException(UserErrors.WRONG_REFRESH_TOKEN);

        const { id, ...userEntity } = await this.usersService.getById(
            payload.id,
        );

        if (userEntity.refreshToken !== refreshToken)
            throw new BadRequestException(UserErrors.WRONG_REFRESH_TOKEN);

        await this.usersService.setRefreshToken(id, null);
    }
}
