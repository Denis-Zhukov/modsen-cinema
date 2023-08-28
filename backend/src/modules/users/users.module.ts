import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { RolesModule } from '../roles/roles.module';
import { TokenModule } from '../token/token.module';
import { FilesModule } from '../files/files.module';
import { SexModule } from '../sex/sex.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersEntity]),
        RolesModule,
        TokenModule,
        FilesModule,
        SexModule,
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
