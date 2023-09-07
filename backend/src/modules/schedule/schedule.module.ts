import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleEntity } from './schedule.entity';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { SeatsModule } from '../seats/seats.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([ScheduleEntity]),
        forwardRef(() => SeatsModule),
    ],
    controllers: [ScheduleController],
    providers: [ScheduleService],
    exports: [ScheduleService],
})
export class ScheduleModule {}
