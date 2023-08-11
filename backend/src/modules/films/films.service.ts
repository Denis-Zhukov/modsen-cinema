import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilmsEntity } from './films.entity';

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
}
