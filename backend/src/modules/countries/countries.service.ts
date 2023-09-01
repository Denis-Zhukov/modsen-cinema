import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountriesEntity } from './countries.entity';
import { Repository } from 'typeorm';
import { Countries } from '../../utils/init-values/countries';

@Injectable()
export class CountriesService implements OnModuleInit {
    public constructor(
        @InjectRepository(CountriesEntity)
        private readonly repository: Repository<CountriesEntity>,
    ) {}

    getAll(limit: number, offset: number) {
        return this.repository.find({ take: limit, skip: offset });
    }

    getById(id: number) {
        return this.repository.findOne({ where: { id } });
    }

    async onModuleInit() {
        const count = await this.repository.count();
        if (count) return;
        await this.repository.insert(
            Object.values(Countries).map((name) => ({ name })),
        );
    }
}
