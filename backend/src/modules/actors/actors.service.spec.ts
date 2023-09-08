import { Test, TestingModule } from '@nestjs/testing';
import { ActorsService } from './actors.service';
import { ActorsEntity } from './actors.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ActorsController } from './actors.controller';

describe('ActorController', () => {
    let actorsService: ActorsService;
    let actorsController: ActorsController;
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
        actorsController = new ActorsController(actorsService);
    });

    it('should be defined', () => {
        expect(actorsService).toBeDefined();
    });

    describe('getAll', () => {
        it('should return an array of actors', async () => {
            const actors: ActorsEntity[] = [
                { id: 1, name: 'Name 1', surname: 'Surname 1', films: [] },
                { id: 2, name: 'Name 2', surname: 'Surname 2', films: [] },
            ];

            jest.spyOn(actorsRepository, 'find').mockImplementation(
                async () => actors,
            );
            const result = await actorsService.getAll(0, 10);
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

    describe('Test endpoints', () => {
        it('[actors/] getAll', async () => {
            const actors: ActorsEntity[] = [
                { id: 1, name: 'Name 1', surname: 'Surname 1', films: [] },
                { id: 2, name: 'Name 2', surname: 'Surname 2', films: [] },
            ];

            jest.spyOn(actorsRepository, 'find').mockImplementation(
                async () => actors,
            );

            const result = await actorsController.getActors(0, 10);

            expect(result).toBe(actors);
        });

        it('[actors/:id] getById', async () => {
            const actor: ActorsEntity = {
                id: 1,
                name: 'Name 1',
                surname: 'Surname 1',
                films: [],
            };

            jest.spyOn(actorsRepository, 'findOne').mockImplementation(
                async () => actor,
            );

            const result = await actorsController.getActorById(1);

            expect(result).toBe(actor);
        });
    });
});
