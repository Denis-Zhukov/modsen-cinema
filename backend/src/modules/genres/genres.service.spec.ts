import { Test, TestingModule } from '@nestjs/testing';
import { GenresService } from './genres.service';
import { Repository } from 'typeorm';
import { GenresEntity } from './genres.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('GenresService', () => {
    let genresService: GenresService;
    let genresRepository: Repository<GenresEntity>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                GenresService,
                {
                    provide: getRepositoryToken(GenresEntity),
                    useClass: Repository,
                },
            ],
        }).compile();

        genresService = module.get<GenresService>(GenresService);
        genresRepository = module.get<Repository<GenresEntity>>(
            getRepositoryToken(GenresEntity),
        );
    });

    it('should be defined', () => {
        expect(genresService).toBeDefined();
    });

    describe('getAll', () => {
        it('should return an array of genres', async () => {
            const genres: GenresEntity[] = [];
            jest.spyOn(genresRepository, 'find').mockResolvedValue(genres);

            const result = await genresService.getAll();

            expect(result).toBe(genres);
        });
    });

    describe('getById', () => {
        it('should return a specific genre', async () => {
            const genreId = 1;
            const genre: GenresEntity = {} as GenresEntity;
            jest.spyOn(genresRepository, 'findOne').mockResolvedValue(genre);

            const result = await genresService.getById(genreId);

            expect(result).toBe(genre);
        });
    });

    describe('getByIds', () => {
        it('should return an array of genres by given IDs', async () => {
            const genreIds = [1, 2, 3] as [number, ...number[]];
            const genres: GenresEntity[] = [];
            jest.spyOn(genresRepository, 'createQueryBuilder').mockReturnValue({
                where: jest.fn().mockReturnThis(),
                getMany: jest.fn().mockResolvedValue(genres),
            } as any);

            const result = await genresService.getByIds(genreIds);

            expect(result).toBe(genres);
        });
    });
});
