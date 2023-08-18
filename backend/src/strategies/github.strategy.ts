import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvFields } from '../utils/env-fields';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
    constructor(private readonly configService: ConfigService) {
        super({
            clientID: configService.get(EnvFields.GITHUB_CLIENT_ID),
            clientSecret: configService.get(EnvFields.GITHUB_SECRET),
            callbackURL: 'http://localhost:8000/api/auth/github/callback',
            scope: ['user:email', 'user:profile', 'profile'],
        });
    }

    async validate(accessToken, refreshToken, profile, done) {
        const { emails, displayName } = profile;
        const [name, surname] = displayName?.split(' ') ?? ['', ''];
        const user = {
            email: emails[0].value,
            name,
            surname,
        };
        done(null, user);
    }
}
