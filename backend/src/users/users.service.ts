import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
    public constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>,
    ) {}

    getAll() {
        return this.usersRepository.find();
    }

    getById(id: number) {
        return this.usersRepository.findOne({ where: { id } });
    }
}
