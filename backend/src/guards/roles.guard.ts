import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TokenService } from '../modules/token/token.service';
import { Request } from 'express';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private tokenService: TokenService,
    ) {}

    async canActivate(context: ExecutionContext) {
        const roles = this.reflector.get<string[]>(
            'roles',
            context.getHandler(),
        );
        if (!roles) return true;
        const request = context.switchToHttp().getRequest() as Request;
        const token = request.headers.authorization.split(' ')[1];
        const { payload } = await this.tokenService.verifyToken(token);

        return roles.some((role) => payload.roles.includes(role));
    }
}
