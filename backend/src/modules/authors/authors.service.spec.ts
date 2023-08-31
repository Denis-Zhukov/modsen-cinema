import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsService } from './authors.service';
import { AuthorsEntity } from './authors.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('AuthorsService', () => {
    let authorsService: AuthorsService;
    let authorsRepository: Repository<AuthorsEntity>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AuthorsService,
                {
                    provide: getRepositoryToken(AuthorsEntity),
                    useClass: Repository,
                },
            ],
        }).compile();

        authorsService = module.get<AuthorsService>(AuthorsService);
        authorsRepository = module.get<Repository<AuthorsEntity>>(
            getRepositoryToken(AuthorsEntity),
        );
    });

    it('should be defined', () => {
        expect(authorsService).toBeDefined();
    });

    describe('getAll', () => {
        it('should return an array of authors', async () => {
            const authors: AuthorsEntity[] = [];
            jest.spyOn(authorsRepository, 'find').mockImplementation(
                async () => authors,
            );

            const result = await authorsService.getAll();

            expect(result).toBe(authors);
        });
    });

    describe('getById', () => {
        it('should return a specific author', async () => {
            const authorId = 1;
            const author: AuthorsEntity = {
                id: authorId,
                name: 'Denis',
                surname: 'Zhukov',
                films: [],
            };
            jest.spyOn(authorsRepository, 'findOne').mockImplementation(
                async () => author,
            );

            const result = await authorsService.getById(authorId);

            expect(result).toBe(author);
        });
    });
});
