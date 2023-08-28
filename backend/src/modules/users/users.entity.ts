import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { UserRatingsEntity } from '../user-ratings/user-ratings.entity';
import { UserReviewsEntity } from '../user-reviews/user-reviews.entity';
import { BookingsEntity } from '../bookings/bookings.entity';
import { RolesEntity } from '../roles/roles.entity';
import { SexEntity } from '../sex/sex.entity';

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

    @Column({ name: 'hash_password', nullable: true })
    hashPassword: string;

    @Column({ name: 'refresh_token', nullable: true })
    refreshToken: string;

    @Column({ nullable: true })
    avatar: string;

    @Column({ name: 'avatar_path', nullable: true })
    avatarPath: string;

    @OneToMany(() => UserRatingsEntity, (ratings) => ratings.user)
    ratings: UserRatingsEntity[];

    @OneToMany(() => UserReviewsEntity, (review) => review.user)
    reviews: UserReviewsEntity[];

    @OneToMany(() => BookingsEntity, (bookings) => bookings.user)
    bookings: BookingsEntity[];

    @ManyToMany(() => RolesEntity, (roles) => roles.users, {
        onDelete: 'CASCADE',
    })
    @JoinTable({
        name: 'user_roles',
        inverseJoinColumn: {
            name: 'role_id',
            referencedColumnName: 'id',
        },
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        },
    })
    roles: RolesEntity[];

    @ManyToOne(() => SexEntity, (sex) => sex.users)
    sex: SexEntity;
}
