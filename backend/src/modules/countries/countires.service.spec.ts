import { Test, TestingModule } from '@nestjs/testing';
import { CountriesService } from './countries.service';
import { Repository } from 'typeorm';
import { CountriesEntity } from './countries.entity';
import { Countries } from '../../utils/init-values/countries';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CountriesService', () => {
    let countriesService: CountriesService;
    let countriesRepository: Repository<CountriesEntity>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CountriesService,
                {
                    provide: getRepositoryToken(CountriesEntity),
                    useClass: Repository,
                },
            ],
        }).compile();

        countriesService = module.get<CountriesService>(CountriesService);
        countriesRepository = module.get<Repository<CountriesEntity>>(
            getRepositoryToken(CountriesEntity),
        );
    });

    it('should be defined', () => {
        expect(countriesService).toBeDefined();
    });

    describe('getAll', () => {
        it('should return an array of countries', async () => {
            const countries: CountriesEntity[] = []; // Mocked array of countries
            jest.spyOn(countriesRepository, 'find').mockImplementation(
                async () => countries,
            );

            const result = await countriesService.getAll();

            expect(result).toBe(countries);
        });
    });

    describe('getById', () => {
        it('should return a specific country', async () => {
            const countryId = 1;
            const country: CountriesEntity = {} as CountriesEntity;
            jest.spyOn(countriesRepository, 'findOne').mockImplementation(
                async () => country,
            );

            const result = await countriesService.getById(countryId);

            expect(result).toBe(country);
        });
    });

    describe('onModuleInit', () => {
        it('should insert countries if none exist', async () => {
            const countriesCount = 0;
            jest.spyOn(countriesRepository, 'count').mockImplementation(
                async () => countriesCount,
            );

            const mockInsertResult = {
                identifiers: [{ id: 1 }],
                generatedMaps: [],
                raw: [],
            };

            jest.spyOn(countriesRepository, 'insert').mockResolvedValue(
                mockInsertResult,
            );

            await countriesService.onModuleInit();

            expect(countriesRepository.insert).toHaveBeenCalledWith(
                Object.values(Countries).map((name) => ({ name })),
            );
        });

        it('should not insert countries if they already exist', async () => {
            const countriesCount = 1;
            jest.spyOn(countriesRepository, 'count').mockImplementation(
                async () => countriesCount,
            );
            jest.spyOn(countriesRepository, 'insert');

            await countriesService.onModuleInit();

            expect(countriesRepository.insert).not.toHaveBeenCalled();
        });
    });
});
