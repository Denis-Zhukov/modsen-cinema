import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';
import { BookingsEntity } from '../bookings/bookings.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'seats' })
@Unique(['rowNumber', 'seatNumber'])
export class SeatsEntity {
    @ApiProperty({ example: 8 })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 2 })
    @Column({ name: 'row_number' })
    rowNumber: number;

    @ApiProperty({ example: 2 })
    @Column({ name: 'seat_number' })
    seatNumber: number;

    @OneToMany(() => BookingsEntity, (bookings) => bookings.seat)
    bookings: BookingsEntity[];
}
