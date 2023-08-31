import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SeatsService } from './seats.service';
import { SeatsEntity } from './seats.entity';
import { BookingsService } from '../bookings/bookings.service';
import { DataSource } from 'typeorm';

describe('SeatsService', () => {
    let seatsService: SeatsService;
    let mockSeatsRepository;
    let mockDataSource;
    let mockBookingsService;

    beforeEach(async () => {
        mockSeatsRepository = {
            find: jest.fn(),
            findOne: jest.fn(),
            query: jest.fn(),
            insert: jest.fn(),
            delete: jest.fn(),
        };

        mockDataSource = {
            createQueryRunner: jest.fn(() => ({
                connect: jest.fn(),
                startTransaction: jest.fn(),
                commitTransaction: jest.fn(),
                rollbackTransaction: jest.fn(),
                release: jest.fn(),
            })),
        };

        mockBookingsService = {
            getByScheduleId: jest.fn(),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SeatsService,
                {
                    provide: getRepositoryToken(SeatsEntity),
                    useValue: mockSeatsRepository,
                },
                {
                    provide: BookingsService,
                    useValue: mockBookingsService,
                },
                {
                    provide: DataSource,
                    useValue: mockDataSource,
                },
            ],
        }).compile();

        seatsService = module.get<SeatsService>(SeatsService);
    });

    describe('getAll', () => {
        it('should return an array of seats', async () => {
            const mockSeatData = [{ id: 1, seatNumber: 1, rowNumber: 1 }];
            mockSeatsRepository.find.mockResolvedValue(mockSeatData);

            const result = await seatsService.getAll();

            expect(result).toEqual(mockSeatData);
        });
    });
});
