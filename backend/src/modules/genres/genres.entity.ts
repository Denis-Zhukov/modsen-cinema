import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { FilmsEntity } from '../films/films.entity';

@Entity({ name: 'genres' })
export class GenresEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @ManyToMany(() => FilmsEntity, (films) => films.genres)
    @JoinTable({
        name: 'film_genres',
        joinColumn: {
            name: 'genre_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'film_id',
            referencedColumnName: 'id',
        },
    })
    films: FilmsEntity[];
}
