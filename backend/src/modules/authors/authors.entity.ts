import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FilmsEntity } from '../films/films.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'authors' })
export class AuthorsEntity {
    @ApiProperty({ example: 1 })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Guy' })
    @Column()
    name: string;

    @ApiProperty({ example: 'Ritchie' })
    @Column()
    surname: string;

    @OneToMany(() => FilmsEntity, (film) => film.author)
    films: FilmsEntity[];
}
