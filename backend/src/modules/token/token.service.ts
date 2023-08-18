import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { EnvFields } from '../../utils/env-fields';
import { JwtPayload } from './types';

@Injectable()
export class TokenService {
    constructor(
        private configService: ConfigService,
        private jwtService: JwtService,
    ) {}

    generateJwtToken(payload: JwtPayload, expiresIn: number) {
        return this.jwtService.signAsync(payload, {
            secret: this.configService.get(EnvFields.SECRET),
            expiresIn,
        });
    }

    async verifyToken(token: string) {
        try {
            const payload = await this.jwtService.verifyAsync<JwtPayload>(
                token,
                { secret: this.configService.get(EnvFields.SECRET) },
            );

            return { payload, verified: true };
        } catch (e) {
            return { payload: null, verified: false };
        }
    }
}
