import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersEntity } from '../users/users.entity';
import { ScheduleEntity } from '../schedule/schedule.entity';
import { SeatsEntity } from '../seats/seats.entity';
import { VisitsEntity } from '../visits/visits.entity';

@Entity({ name: 'bookings' })
@Index('schedule_seat_uniq', ['scheduleId', 'seatId'], { unique: true })
export class BookingsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'user_id' })
    userId: number;

    @Column({ name: 'schedule_id' })
    scheduleId: number;

    @Column({ name: 'seat_id' })
    seatId: number;

    @Column({ type: 'decimal' })
    paid: number;

    @ManyToOne(() => UsersEntity, (users) => users.bookings)
    @JoinColumn({ name: 'user_id' })
    user: UsersEntity;

    @ManyToOne(() => ScheduleEntity, (schedule) => schedule.bookings)
    @JoinColumn({ name: 'schedule_id' })
    schedule: ScheduleEntity;

    @ManyToOne(() => SeatsEntity, (seats) => seats.bookings)
    @JoinColumn({ name: 'seat_id' })
    seat: SeatsEntity;

    @OneToMany(() => VisitsEntity, (visit) => visit.booking)
    visits: VisitsEntity[];
}
