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

@Entity({ name: 'schedule' })
export class ScheduleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp' })
    dateAndTime: Date;

    @Column()
    price: number;

    @Column({ name: 'film_id' })
    filmId: number;

    @ManyToOne(() => FilmsEntity, (films) => films.schedules)
    @JoinColumn({ name: 'film_id' })
    film: FilmsEntity;

    @OneToMany(() => BookingsEntity, (bookings) => bookings.schedule)
    bookings: BookingsEntity;
}
