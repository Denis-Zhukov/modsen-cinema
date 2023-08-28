import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsEntity } from './bookings.entity';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';
import { TokenModule } from '../token/token.module';
import { ScheduleModule } from '../schedule/schedule.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([BookingsEntity]),
        TokenModule,
        ScheduleModule,
    ],
    controllers: [BookingsController],
    providers: [BookingsService],
    exports: [BookingsService],
})
export class BookingsModule {}
