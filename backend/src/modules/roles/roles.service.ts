import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesEntity } from './roles.entity';
import { Repository } from 'typeorm';
import { Roles } from '../../typing/Roles';

@Injectable()
export class RolesService implements OnModuleInit {
    public constructor(
        @InjectRepository(RolesEntity)
        private readonly repository: Repository<RolesEntity>,
    ) {}

    async onModuleInit() {
        const count = await this.repository.count();
        if (count) return;
        await this.repository.insert(
            Object.values(Roles).map((name) => ({ name })),
        );
    }

    async findByName(name: string) {
        return this.repository.findOne({ where: { name } });
    }
}
