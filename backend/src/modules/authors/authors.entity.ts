import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FilmsEntity } from '../films/films.entity';

@Entity({ name: 'authors' })
export class AuthorsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @OneToMany(() => FilmsEntity, (film) => film.author)
    films: FilmsEntity[];
}
