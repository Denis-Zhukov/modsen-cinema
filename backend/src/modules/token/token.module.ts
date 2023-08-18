import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

@Module({
    providers: [TokenService, JwtService],
    exports: [TokenService],
    imports: [UsersModule],
})
export class TokenModule {}
