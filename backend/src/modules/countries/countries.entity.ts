import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FilmsEntity } from '../films/films.entity';

@Entity({ name: 'countries' })
export class CountriesEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => FilmsEntity, (film) => film.author)
    films: FilmsEntity[];
}
