import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { CountriesEntity } from '../countries/countries.entity';
import { AuthorsEntity } from '../authors/authors.entity';
import { UserRatingsEntity } from '../user-ratings/user-ratings.entity';
import { UserReviewsEntity } from '../user-reviews/user-reviews.entity';
import { ScheduleEntity } from '../schedule/schedule.entity';
import { ActorsEntity } from '../actors/actors.entity';
import { GenresEntity } from '../genres/genres.entity';

@Entity({ name: 'films' })
export class FilmsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    release: number;

    @Column()
    description: string;

    @Column()
    trailer: string;

    @Column()
    preview: string;

    @Column({ unique: true })
    slug: string;

    @OneToOne(() => AuthorsEntity)
    @JoinColumn({ name: 'author_id' })
    author: AuthorsEntity;

    @OneToOne(() => CountriesEntity)
    @JoinColumn({ name: 'country_id' })
    country: CountriesEntity;

    @OneToMany(() => UserRatingsEntity, (ratings) => ratings.film)
    ratings: UserRatingsEntity[];

    @OneToMany(() => UserReviewsEntity, (review) => review.film)
    reviews: UserReviewsEntity[];

    @OneToMany(() => ScheduleEntity, (schedule) => schedule.film)
    schedules: ScheduleEntity[];

    @ManyToMany(() => ActorsEntity, (actors) => actors.films)
    @JoinTable({
        name: 'film_actors',
        inverseJoinColumn: {
            name: 'actor_id',
            referencedColumnName: 'id',
        },
        joinColumn: {
            name: 'film_id',
            referencedColumnName: 'id',
        },
    })
    actors: ActorsEntity[];

    @ManyToMany(() => GenresEntity, (genres) => genres.films)
    @JoinTable({
        name: 'film_genres',
        inverseJoinColumn: {
            name: 'genre_id',
            referencedColumnName: 'id',
        },
        joinColumn: {
            name: 'film_id',
            referencedColumnName: 'id',
        },
    })
    genres: GenresEntity[];
}
