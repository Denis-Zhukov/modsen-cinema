import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { CountriesEntity } from '../countries/countries.entity';
import { AuthorsEntity } from '../authors/authors.entity';
import { UserRatingsEntity } from '../user-ratings/user-ratings.entity';
import { UserReviewsEntity } from '../user-reviews/user-reviews.entity';
import { ScheduleEntity } from '../schedule/schedule.entity';
import { ActorsEntity } from '../actors/actors.entity';
import { GenresEntity } from '../genres/genres.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'films' })
export class FilmsEntity {
    @ApiProperty({ example: 1 })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Your name' })
    @Column()
    name: string;

    @ApiProperty({ example: 2016 })
    @Column()
    release: number;

    @ApiProperty({
        example:
            'Your Name is a 2016 Japanese animated romantic fantasy film written and directed by Makoto Shinkai',
    })
    @Column()
    description: string;

    @ApiProperty({ example: 'static/film/your-name_2kg2-/trailer.mp4' })
    @Column()
    trailer: string;

    @ApiProperty({ example: 'static/film/your-name_2kg2-/preview.png' })
    @Column()
    preview: string;

    @ApiProperty({ example: 'G:/public/film/your-name_2kg2-/trailer.mp4' })
    @Column({ name: 'trailer_path' })
    trailerPath: string;

    @ApiProperty({ example: 'G:/public/film/your-name_2kg2-/preview.png' })
    @Column({ name: 'preview_path' })
    previewPath: string;

    @ApiProperty({ example: 'your-name_2kg2-' })
    @Column({ unique: true })
    slug: string;

    @ManyToOne(() => AuthorsEntity, (author) => author.films)
    @JoinColumn({ name: 'author_id' })
    author: AuthorsEntity;

    @ManyToOne(() => CountriesEntity, (country) => country.films)
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
