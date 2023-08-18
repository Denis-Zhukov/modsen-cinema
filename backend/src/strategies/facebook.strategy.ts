import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvFields } from '../utils/env-fields';
import { UserErrors } from '../utils/user-errors';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
    constructor(private readonly configService: ConfigService) {
        super({
            clientID: configService.get(EnvFields.FACEBOOK_CLIENT_ID),
            clientSecret: configService.get(EnvFields.FACEBOOK_SECRET),
            callbackURL: 'http://localhost:8000/api/auth/facebook/callback',
            profileFields: ['displayName', 'email'],
        });
    }

    async validate(accessToken, refreshToken, profile, done) {
        const { email, displayName } = profile;

        if (!email) return done(new BadRequestException(UserErrors.NO_EMAIL));

        const [name, surname] = displayName?.split(' ') ?? ['', ''];
        const user = {
            email,
            name,
            surname,
        };

        done(null, user);
    }
}
