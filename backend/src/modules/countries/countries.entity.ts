import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FilmsEntity } from '../films/films.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'countries' })
export class CountriesEntity {
    @ApiProperty({ example: 1 })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Belarus' })
    @Column({ unique: true })
    name: string;

    @OneToMany(() => FilmsEntity, (film) => film.author)
    films: FilmsEntity[];
}
