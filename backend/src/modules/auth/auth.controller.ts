import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Post,
    Req,
    Res,
    UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Request, Response } from 'express';
import { CookieFields } from '../../utils/cookie-fields';
import { ConfigService } from '@nestjs/config';
import { EnvFields } from '../../utils/env-fields';
import { AuthGuard } from '@nestjs/passport';
import { UserErrors } from '../../utils/user-errors';

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
        const { refreshToken, accessToken, user } = await this.service.login(
            dto,
        );

        const expires = new Date();
        expires.setSeconds(
            expires.getSeconds() +
                +this.configService.get(EnvFields.EXPIRE_REFRESH_JWT),
        );

        response.cookie(CookieFields.REFRESH_TOKEN, refreshToken, {
            httpOnly: true,
            expires,
        });

        return { accessToken, ...user };
    }

    @Post('refresh')
    async refresh(@Req() req: Request) {
        const refreshToken = req.cookies[CookieFields.REFRESH_TOKEN];
        const newAccessToken = await this.service.refreshAccessToken(
            refreshToken,
        );
        return { accessToken: newAccessToken };
    }

    @Post('logout')
    async logout(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    ) {
        const refreshToken = req.cookies[CookieFields.REFRESH_TOKEN];

        if (!refreshToken)
            throw new BadRequestException(UserErrors.NO_REFRESH_TOKEN);

        res.clearCookie(CookieFields.REFRESH_TOKEN);
        await this.service.logout(refreshToken);
    }

    private async oauthCallback(req: Request, res: Response) {
        const { email, surname, name } = req.user as {
            email: string;
            surname: string;
            name: string;
        };
        const refreshToken = await this.service.oauth(name, surname, email);
        res.cookie(CookieFields.REFRESH_TOKEN, refreshToken);
        res.redirect('http://localhost:3000');
    }

    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth() {}

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
        await this.oauthCallback(req, res);
    }

    @Get('github')
    @UseGuards(AuthGuard('github'))
    async githubAuth() {}

    @Get('github/callback')
    @UseGuards(AuthGuard('github'))
    async githubAuthRedirect(@Req() req: Request, @Res() res: Response) {
        await this.oauthCallback(req, res);
    }

    @Get('facebook')
    @UseGuards(AuthGuard('facebook'))
    async facebookAuth() {}

    @Get('facebook/callback')
    @UseGuards(AuthGuard('facebook'))
    async facebookAuthRedirect(@Req() req: Request, @Res() res: Response) {
        await this.oauthCallback(req, res);
    }
}
