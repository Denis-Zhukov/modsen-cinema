import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleEntity } from './schedule.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ScheduleEntity])],
})
export class ScheduleModule {}
