import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FilmsService } from './films.service';
import { FilmsEntity } from './films.entity';
import { UserReviewsService } from '../user-reviews/user-reviews.service';
import { UserReviewsEntity } from '../user-reviews/user-reviews.entity';

describe('FilmsService', () => {
    let filmsService: FilmsService;
    let filmsRepository: Repository<FilmsEntity>;
    let reviewsService: UserReviewsService;

    const mockFilm: FilmsEntity = {
        id: 1,
        name: 'Test Film',
    } as FilmsEntity;

    const mockReviews = [{}, {}, {}] as UserReviewsEntity[];

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FilmsService,
                {
                    provide: getRepositoryToken(FilmsEntity),
                    useClass: Repository,
                },
                {
                    provide: UserReviewsService,
                    useValue: {
                        getByFilmId: jest.fn(() => mockReviews),
                    },
                },
            ],
        }).compile();

        filmsService = module.get<FilmsService>(FilmsService);
        filmsRepository = module.get<Repository<FilmsEntity>>(
            getRepositoryToken(FilmsEntity),
        );
        reviewsService = module.get<UserReviewsService>(UserReviewsService);
    });

    it('should be defined', () => {
        expect(filmsService).toBeDefined();
    });

    describe('getBySlug', () => {
        it('should return a film with calculated rating and limited reviews', async () => {
            const slug = 'test-film';
            const mockFilmWithReviews = {
                ...mockFilm,
                ratings: [{ rate: 5 }, { rate: 4 }],
            } as FilmsEntity;

            jest.spyOn(filmsRepository, 'findOne').mockResolvedValue(
                mockFilmWithReviews,
            );
            jest.spyOn(reviewsService, 'getByFilmId').mockResolvedValue(
                mockReviews,
            );

            const result = await filmsService.getBySlug(slug);

            expect(result.name).toBe(mockFilm.name);
            expect(result.rating).toBe(9); // 5 + 4
            expect(result.reviews).toBe(mockReviews);
        });
    });

    describe('addFilm', () => {
        it('should add a new film', async () => {
            const addFilmDto = {
                name: 'New Film',
                release: '2023',
                description: 'A new film.',
            };
            const slug = 'new-film';
            const mockPreview = { endpoint: 'preview', path: 'path' };
            const mockTrailer = { endpoint: 'trailer', path: 'path' };

            jest.spyOn(filmsRepository, 'create').mockReturnValue(mockFilm);
            jest.spyOn(filmsRepository, 'save').mockResolvedValue(mockFilm);

            const result = await filmsService.addFilm(
                addFilmDto,
                slug,
                mockPreview,
                mockTrailer,
            );

            expect(result).toBe(mockFilm);
        });
    });
});
