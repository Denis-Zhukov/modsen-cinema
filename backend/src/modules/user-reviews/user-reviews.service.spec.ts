import { Test, TestingModule } from '@nestjs/testing';
import { UserReviewsService } from './user-reviews.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserReviewsEntity } from './user-reviews.entity';
import { Repository } from 'typeorm';

describe('UserReviewsService', () => {
    let userReviewsService: UserReviewsService;
    let reviewsRepository: Repository<UserReviewsEntity>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserReviewsService,
                {
                    provide: getRepositoryToken(UserReviewsEntity),
                    useClass: Repository,
                },
            ],
        }).compile();

        userReviewsService = module.get<UserReviewsService>(UserReviewsService);
        reviewsRepository = module.get<Repository<UserReviewsEntity>>(
            getRepositoryToken(UserReviewsEntity),
        );
    });

    describe('getByFilmId', () => {
        it('should be defined', () => {
            expect(userReviewsService.getByFilmId).toBeDefined();
        });

        it('should return reviews related to the specified filmId', async () => {
            const filmId = 1;
            const limit = 5;
            const reviews = [
                {
                    id: 1,
                    filmId: 1,
                    content: 'Review 1',
                    user: { id: 1, name: 'User 1' },
                },
                {
                    id: 2,
                    filmId: 1,
                    content: 'Review 2',
                    user: { id: 2, name: 'User 2' },
                },
            ];

            reviewsRepository.find = jest.fn().mockResolvedValue(reviews);

            const result = await userReviewsService.getByFilmId(filmId, limit);

            expect(reviewsRepository.find).toHaveBeenCalledWith({
                where: { filmId },
                take: limit,
                order: { id: { direction: 'DESC' } },
                relations: ['user'],
            });
            expect(result).toEqual(reviews);
        });
    });
});
