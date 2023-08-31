import { Test, TestingModule } from '@nestjs/testing';
import { ActorsService } from './actors.service';
import { ActorsEntity } from './actors.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ActorsService', () => {
    let actorsService: ActorsService;
    let actorsRepository: Repository<ActorsEntity>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ActorsService,
                {
                    provide: getRepositoryToken(ActorsEntity),
                    useClass: Repository,
                },
            ],
        }).compile();

        actorsService = module.get<ActorsService>(ActorsService);
        actorsRepository = module.get<Repository<ActorsEntity>>(
            getRepositoryToken(ActorsEntity),
        );
    });

    it('should be defined', () => {
        expect(actorsService).toBeDefined();
    });

    describe('getAll', () => {
        it('should return an array of actors', async () => {
            const actors: ActorsEntity[] = []; // Mocked array of actors
            jest.spyOn(actorsRepository, 'find').mockImplementation(
                async () => actors,
            );

            const result = await actorsService.getAll();

            expect(result).toBe(actors);
        });
    });

    describe('getById', () => {
        it('should return a specific actor', async () => {
            const actorId = 1;
            const actor: ActorsEntity = {
                id: 1,
                surname: 'Denis',
                name: 'Zhukov',
                films: [],
            };
            jest.spyOn(actorsRepository, 'findOne').mockImplementation(
                async () => actor,
            );

            const result = await actorsService.getById(actorId);

            expect(result).toBe(actor);
        });
    });
});
