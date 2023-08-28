import { Module } from '@nestjs/common';
import { SeatsController } from './seats.controller';
import { SeatsService } from './seats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeatsEntity } from './seats.entity';
import { BookingsModule } from '../bookings/bookings.module';
import { ScheduleModule } from '../schedule/schedule.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([SeatsEntity]),
        BookingsModule,
        ScheduleModule,
    ],
    controllers: [SeatsController],
    providers: [SeatsService],
    exports: [SeatsService],
})
export class SeatsModule {}
