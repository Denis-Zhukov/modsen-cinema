import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { FilmsEntity } from '../films/films.entity';
import { UserRatingsEntity } from '../user-ratings/user-ratings.entity';
import { UserReviewsEntity } from '../user-reviews/user-reviews.entity';
import { BookingsEntity } from '../bookings/bookings.entity';

@Entity({ name: 'users' })
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column({ unique: true })
    email: string;

    @Column({ name: 'hash_password' })
    hashPassword: string;

    @OneToMany(() => UserRatingsEntity, (ratings) => ratings.user)
    ratings: UserRatingsEntity[];

    @OneToMany(() => UserReviewsEntity, (review) => review.user)
    reviews: UserReviewsEntity[];

    @OneToMany(() => BookingsEntity, (bookings) => bookings.user)
    bookings: BookingsEntity[];
}
