import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsersEntity } from '../users/users.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'sex' })
export class SexEntity {
    @ApiProperty({ example: 1 })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'male' })
    @Column({ unique: true })
    name: string;

    @OneToMany(() => UsersEntity, (user) => user.sex)
    users: UsersEntity[];
}
