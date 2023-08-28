import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SexEntity } from './sex.entity';
import { Sex } from '../../utils/init-values/sex';

@Injectable()
export class SexService {
    public constructor(
        @InjectRepository(SexEntity)
        private readonly repository: Repository<SexEntity>,
    ) {}

    async onModuleInit() {
        const count = await this.repository.count();
        if (count) return;
        await this.repository.insert(
            Object.values(Sex).map((name) => ({ name })),
        );
    }

    async findByName(name: string) {
        return this.repository.findOne({ where: { name } });
    }
}
