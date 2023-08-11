import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsersEntity } from '../users/users.entity';
import { ScheduleEntity } from '../schedule/schedule.entity';
import { SeatsEntity } from '../seats/seats.entity';

@Entity({ name: 'bookings' })
export class BookingsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UsersEntity, (users) => users.bookings)
    @JoinColumn({ name: 'user_id' })
    user: UsersEntity;

    @ManyToOne(() => ScheduleEntity, (schedule) => schedule.bookings)
    @JoinColumn({ name: 'schedule_id' })
    schedule: ScheduleEntity;

    @ManyToOne(() => SeatsEntity, (seats) => seats.bookings)
    @JoinColumn({ name: 'seats_id' })
    seats: SeatsEntity;
}
