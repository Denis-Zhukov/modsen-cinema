import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { FilmsEntity } from '../films/films.entity';

@Entity({ name: 'actors' })
export class ActorsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    surname: string;

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
