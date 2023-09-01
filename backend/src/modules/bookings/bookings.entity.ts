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
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'bookings' })
@Index('schedule_seat_uniq', ['scheduleId', 'seatId'], { unique: true })
export class BookingsEntity {
    @ApiProperty({ example: 1 })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 1 })
    @Column({ name: 'user_id' })
    userId: number;

    @ApiProperty({ example: 1 })
    @Column({ name: 'schedule_id' })
    scheduleId: number;

    @ApiProperty({ example: 1 })
    @Column({ name: 'seat_id' })
    seatId: number;

    @ApiProperty({ example: '5' })
    @Column({ type: 'decimal' })
    paid: string;

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
