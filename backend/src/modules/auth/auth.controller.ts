import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { CookieFields } from '../../typing/CookieFields';
import { ConfigService } from '@nestjs/config';
import { EnvFields } from '../../typing/EnvFields';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly service: AuthService,
        private readonly configService: ConfigService,
    ) {}

    @Post('register')
    register(@Body() dto: CreateUserDto) {
        return this.service.register(dto);
    }

    @Post('login')
    async login(
        @Body() dto: LoginDto,
        @Res({ passthrough: true }) response: Response,
    ) {
        const { refreshToken, ...user } = await this.service.login(dto);

        const expires = new Date();
        expires.setSeconds(
            expires.getSeconds() +
                +this.configService.get(EnvFields.EXPIRE_REFRESH_JWT),
        );

        response.cookie(CookieFields.RefreshToken, refreshToken, {
            httpOnly: true,
            expires,
        });

        return user;
    }
}
