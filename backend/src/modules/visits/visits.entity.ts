import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BookingsEntity } from '../bookings/bookings.entity';

@Entity({ name: 'visits' })
export class VisitsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => BookingsEntity, (booking) => booking.visits)
    @JoinColumn({ name: 'booking_id' })
    booking: BookingsEntity;
}
