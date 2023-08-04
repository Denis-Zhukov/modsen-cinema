import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';
import { UsersEntity } from '../users/users.entity';
import { FilmsEntity } from '../films/films.entity';

@Entity({ name: 'user_ratings' })
@Unique(['userId', 'filmId'])
export class UserRatingsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'user_id' })
    userId: number;

    @Column({ name: 'film_id' })
    filmId: number;

    @Column()
    rate: number;

    @ManyToOne(() => UsersEntity, (user) => user.ratings)
    @JoinColumn({ name: 'user_id' })
    user: UsersEntity;

    @ManyToOne(() => FilmsEntity, (films) => films.ratings)
    @JoinColumn({ name: 'film_id' })
    film: UsersEntity;
}
