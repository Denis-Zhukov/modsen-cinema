import { Injectable } from '@nestjs/common';
import { ActorsEntity } from './actors.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ActorsService {
    public constructor(
        @InjectRepository(ActorsEntity)
        private readonly actorsRepository: Repository<ActorsEntity>,
    ) {}

    async getAll(limit: number, offset: number) {
        return await this.actorsRepository.find({ skip: offset, take: limit });
    }

    async getById(id: number) {
        return await this.actorsRepository.findOne({ where: { id } });
    }
}
