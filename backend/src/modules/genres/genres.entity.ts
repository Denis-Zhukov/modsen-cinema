import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { FilmsEntity } from '../films/films.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'genres' })
export class GenresEntity {
    @ApiProperty({ example: 1 })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'action' })
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
