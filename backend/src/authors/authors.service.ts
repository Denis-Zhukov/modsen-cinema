import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorsEntity } from './authors.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
    public constructor(
        @InjectRepository(AuthorsEntity)
        private readonly authorsRepository: Repository<AuthorsEntity>,
    ) {}

    getAll() {
        return this.authorsRepository.find();
    }

    getById(id: number) {
        return this.authorsRepository.findOne({ where: { id } });
    }
}
