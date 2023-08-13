import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { EnvFields } from '../../utils/env-fields';

@Injectable()
export class TokenService {
    constructor(
        private configService: ConfigService,
        private jwtService: JwtService,
    ) {}

    async generateJwtToken(user: any, expiresIn: number) {
        const payload = { user };
        return this.jwtService.sign(payload, {
            secret: this.configService.get(EnvFields.SECRET),
            expiresIn,
        });
    }
}
