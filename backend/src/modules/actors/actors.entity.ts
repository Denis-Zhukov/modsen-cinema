import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { FilmsEntity } from '../films/films.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'actors' })
export class ActorsEntity {
    @ApiProperty({ example: 1 })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Holand' })
    @Column()
    surname: string;

    @ApiProperty({ example: 'Tom' })
    @Column()
    name: string;

    @ManyToMany(() => FilmsEntity, (films) => films.actors)
    @JoinTable({
        name: 'film_actors',
        joinColumn: {
            name: 'actor_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'film_id',
            referencedColumnName: 'id',
        },
    })
    films: FilmsEntity[];
}
