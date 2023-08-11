import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';
import { BookingsEntity } from '../bookings/bookings.entity';

@Entity({ name: 'seats' })
@Unique(['rowNumber', 'seatNumber'])
export class SeatsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'row_number' })
    rowNumber: number;

    @Column({ name: 'seat_number' })
    seatNumber: number;

    @Column({ name: 'is_available', default: true })
    isAvailable: boolean;

    @OneToMany(() => BookingsEntity, (bookings) => bookings.seats)
    bookings: BookingsEntity[];
}
