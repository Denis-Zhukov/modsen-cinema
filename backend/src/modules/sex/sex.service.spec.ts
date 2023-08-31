import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SexService } from './sex.service';
import { SexEntity } from './sex.entity';
import { Sex } from '../../utils/init-values/sex';

describe('SexService', () => {
    let sexService: SexService;
    let mockSexRepository: Partial<
        Record<keyof Repository<SexEntity>, jest.Mock>
    >;

    beforeEach(async () => {
        mockSexRepository = {
            count: jest.fn(),
            insert: jest.fn(),
            findOne: jest.fn(),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SexService,
                {
                    provide: getRepositoryToken(SexEntity),
                    useValue: mockSexRepository,
                },
            ],
        }).compile();

        sexService = module.get<SexService>(SexService);
    });

    describe('onModuleInit', () => {
        it('should not insert new sex records if there are existing records', async () => {
            mockSexRepository.count.mockResolvedValue(1);

            await sexService.onModuleInit();

            expect(mockSexRepository.insert).not.toHaveBeenCalled();
        });

        it('should insert new sex records if no existing records are found', async () => {
            mockSexRepository.count.mockResolvedValue(0);

            await sexService.onModuleInit();

            expect(mockSexRepository.insert).toHaveBeenCalledWith(
                Object.values(Sex).map((name) => ({ name })),
            );
        });
    });

    describe('findByName', () => {
        it('should return a sex entity by name', async () => {
            const mockSexEntity = { id: 1, name: 'Male' };
            mockSexRepository.findOne.mockResolvedValue(mockSexEntity);

            const result = await sexService.findByName('Male');

            expect(result).toEqual(mockSexEntity);
        });

        it('should return undefined if sex entity with the given name is not found', async () => {
            mockSexRepository.findOne.mockResolvedValue(undefined);

            const result = await sexService.findByName('NonExistentSex');

            expect(result).toBeUndefined();
        });
    });
});
