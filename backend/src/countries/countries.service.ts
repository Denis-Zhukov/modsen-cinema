import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountriesEntity } from './countries.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
    public constructor(
        @InjectRepository(CountriesEntity)
        private readonly repository: Repository<CountriesEntity>,
    ) {}

    getAll() {
        return this.repository.find();
    }

    getById(id: number) {
        return this.repository.findOne({ where: { id } });
    }
}
