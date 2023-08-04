import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenresEntity } from './genres.entity';

@Injectable()
export class GenresService {
    constructor(
        @InjectRepository(GenresEntity)
        private readonly genresRepository: Repository<GenresEntity>,
    ) {}

    getAll() {
        return this.genresRepository.find();
    }

    getById(id: number) {
        return this.genresRepository.findOne({ where: { id } });
    }
}
