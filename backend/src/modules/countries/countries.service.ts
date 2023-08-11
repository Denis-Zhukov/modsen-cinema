import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountriesEntity } from './countries.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService implements OnModuleInit {
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

    async onModuleInit() {
        const count = await this.repository.count();
        if (count) return;
        await this.repository.insert([
            { name: 'Belarus' },
            { name: 'Russian' },
        ]);
    }
}
