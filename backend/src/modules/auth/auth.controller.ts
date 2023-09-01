import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
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
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegisterResponseFailed } from './swagger/register-response-failed';
import { RegisterResponseSuccess } from './swagger/register-response-success';
import { LoginResponseSuccess } from './swagger/login-response-success';
import { LoginResponseFailed } from './swagger/login-response-failed';
import { RefreshResponseFailed } from './swagger/refresh-response-failed';
import { LogoutResponseFailed } from './swagger/logout-response-failed';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly service: AuthService,
        private readonly configService: ConfigService,
    ) {}

    @ApiBody({ type: CreateUserDto })
    @ApiResponse({ status: 201, type: RegisterResponseSuccess })
    @ApiResponse({ status: 400, type: RegisterResponseFailed })
    @Post('register')
    register(@Body() dto: CreateUserDto) {
        return this.service.register(dto);
    }

    @ApiBody({ type: LoginDto })
    @ApiResponse({ status: 200, type: LoginResponseSuccess })
    @ApiResponse({ status: 400, type: LoginResponseFailed })
    @Post('login')
    @HttpCode(200)
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

    @ApiResponse({ status: 200, type: LoginResponseSuccess })
    @ApiResponse({ status: 401, type: RefreshResponseFailed })
    @Post('refresh')
    @HttpCode(200)
    async refresh(@Req() req: Request) {
        const refreshToken = req.cookies[CookieFields.REFRESH_TOKEN];
        return await this.service.refreshAccessToken(refreshToken);
    }

    @Post('logout')
    @ApiResponse({ status: 200 })
    @ApiResponse({ status: 401, type: LogoutResponseFailed })
    @HttpCode(200)
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
