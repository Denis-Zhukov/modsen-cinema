import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersEntity } from '../users/users.entity';

@Entity({ name: 'roles' })
export class RolesEntity {
    @PrimaryGeneratedColumn()
    id: number;

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
