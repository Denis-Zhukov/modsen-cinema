import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesEntity } from './roles.entity';

@Module({
    imports: [TypeOrmModule.forFeature([RolesEntity])],
    providers: [RolesService],
    exports: [RolesService],
})
export class RolesModule {}
