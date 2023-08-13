import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilmsEntity } from './films.entity';
import { AddFilmDto } from './dto/add-film.dto';

@Injectable()
export class FilmsService {
    public constructor(
        @InjectRepository(FilmsEntity)
        private readonly repository: Repository<FilmsEntity>,
    ) {}

    getAll() {
        return this.repository.find();
    }

    getById(id: number) {
        return this.repository.findOne({
            where: { id },
            relations: { author: true },
        });
    }

    async addFilm(
        dto: AddFilmDto,
        slug: string,
        preview: string,
        trailer: string,
    ) {
        const film = this.repository.create({
            name: dto.name,
            release: +dto.release,
            description: dto.description,
            slug,
            preview,
            trailer,
        });

        return await this.repository.save(film);
    }
}
