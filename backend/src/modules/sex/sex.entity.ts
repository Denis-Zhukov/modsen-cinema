import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsersEntity } from '../users/users.entity';

@Entity({ name: 'sex' })
export class SexEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => UsersEntity, (user) => user.sex)
    users: UsersEntity[];
}
