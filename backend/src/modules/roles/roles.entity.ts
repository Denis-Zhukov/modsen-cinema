import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersEntity } from '../users/users.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'roles' })
export class RolesEntity {
    @ApiProperty({ example: 1 })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'user' })
    @Column({ unique: true })
    name: string;

    @ManyToMany(() => UsersEntity, (users) => users.roles)
    @JoinTable({
        name: 'user_roles',
        inverseJoinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        },
        joinColumn: {
            name: 'role_id',
            referencedColumnName: 'id',
        },
    })
    users: UsersEntity[];
}
