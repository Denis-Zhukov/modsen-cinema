import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback, Profile } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { EnvFields } from '../utils/env-fields';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(private readonly configService: ConfigService) {
        super({
            clientID: configService.get(EnvFields.GOOGLE_CLIENT_ID),
            clientSecret: configService.get(EnvFields.GOOGLE_SECRET),
            callbackURL: 'http://localhost:8000/api/auth/google/callback',
            scope: ['email', 'profile'],
            passReqToCallback: true,
        });
    }

    async validate(
        req: Request,
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: VerifyCallback,
    ) {
        const { name, emails } = profile;
        const user = {
            email: emails[0].value,
            name: name.givenName,
            surname: name.familyName,
            accessToken,
        };

        done(null, user);
    }
}
