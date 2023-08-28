import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserReviewsEntity } from './user-reviews.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserReviewsService {
    constructor(
        @InjectRepository(UserReviewsEntity)
        private readonly reviewsRepository: Repository<UserReviewsEntity>,
    ) {}

    async getByFilmId(filmId: number, limit: number) {
        return this.reviewsRepository.find({
            where: { filmId },
            take: limit,
            relations: ['user'],
        });
    }
}
