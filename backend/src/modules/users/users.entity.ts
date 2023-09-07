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
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class UsersEntity {
    @ApiProperty({ example: 1 })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Denis' })
    @Column()
    name: string;

    @ApiProperty({ example: 'Zhukov' })
    @Column()
    surname: string;

    @ApiProperty({ example: 'example@gmail.com' })
    @Column({ unique: true })
    email: string;

    @ApiProperty({ example: 'gji509252i5k2k3m14_2421$024jfi' })
    @Column({ name: 'hash_password', nullable: true })
    hashPassword: string;

    @ApiProperty({ example: 'defa.ltto.ken' })
    @Column({ name: 'refresh_token', nullable: true })
    refreshToken: string;

    @ApiProperty({ example: 'static/avatars/5.png' })
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

    @ApiProperty({ type: [RolesEntity] })
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

    @ApiProperty({ type: SexEntity })
    @ManyToOne(() => SexEntity, (sex) => sex.users)
    sex: SexEntity;
}
