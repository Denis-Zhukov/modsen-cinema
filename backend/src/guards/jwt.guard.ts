import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { TokenService } from '../modules/token/token.service';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(private tokenService: TokenService) {
        super();
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization.split(' ')[1];
        const { payload: user, verified } = await this.tokenService.verifyToken(
            token,
        );
        request.user = user;
        return verified;
    }
}
