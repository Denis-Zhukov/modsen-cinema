import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenresEntity } from './genres.entity';
import { Genres } from '../../utils/init-values/genres';

@Injectable()
export class GenresService implements OnModuleInit {
    constructor(
        @InjectRepository(GenresEntity)
        private readonly repository: Repository<GenresEntity>,
    ) {}

    async onModuleInit() {
        const count = await this.repository.count();
        if (count) return;
        await this.repository.insert(
            Object.values(Genres).map((name) => ({ name })),
        );
    }

    getAll() {
        return this.repository.find();
    }

    getById(id: number) {
        return this.repository.findOne({ where: { id } });
    }
}
