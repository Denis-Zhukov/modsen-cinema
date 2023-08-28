import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitsEntity } from './visits.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VisitsEntity])],
})
export class VisitsModule {}
