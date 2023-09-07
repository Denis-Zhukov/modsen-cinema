import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { FilmsEntity } from '../films/films.entity';
import { BookingsEntity } from '../bookings/bookings.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'schedule' })
export class ScheduleEntity {
    @ApiProperty({ example: 1 })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: new Date().toLocaleString() })
    @Column({ type: 'timestamp' })
    dateAndTime: Date;

    @ApiProperty({ example: 5 })
    @Column()
    price: number;

    @ApiProperty({ example: 1 })
    @Column({ name: 'film_id' })
    filmId: number;

    @ManyToOne(() => FilmsEntity, (films) => films.schedules)
    @JoinColumn({ name: 'film_id' })
    @ApiProperty({ type: () => FilmsEntity })
    film: FilmsEntity;

    @OneToMany(() => BookingsEntity, (bookings) => bookings.schedule)
    bookings: BookingsEntity[];
}
