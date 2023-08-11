import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SeatsEntity } from './seats.entity';

@Injectable()
export class SeatsService {
    public constructor(
        @InjectRepository(SeatsEntity)
        private readonly seatsRepository: Repository<SeatsEntity>,
    ) {}

    getAll() {
        return this.seatsRepository.find();
    }

    getById(id: number) {
        return this.seatsRepository.findOne({ where: { id } });
    }
}
