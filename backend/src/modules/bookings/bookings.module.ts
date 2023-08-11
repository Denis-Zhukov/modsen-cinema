import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsEntity } from './bookings.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BookingsEntity])],
})
export class BookingsModule {}
