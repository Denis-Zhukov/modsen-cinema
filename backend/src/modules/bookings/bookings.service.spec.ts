import { Test, TestingModule } from '@nestjs/testing';
import { BookingsService } from './bookings.service';
import { Repository } from 'typeorm';
import { ScheduleService } from '../schedule/schedule.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BookingsEntity } from './bookings.entity';
import { ScheduleEntity } from '../schedule/schedule.entity';

describe('BookingsService', () => {
    let bookingsService: BookingsService;
    let bookingsRepository: Repository<BookingsEntity>;
    let scheduleService: ScheduleService;

    const mockBooking: BookingsEntity = {
        id: 1,
        userId: 1,
        scheduleId: 1,
        seatId: 1,
        paid: '10',
        visits: [],
        seat: null,
        user: null,
        schedule: null,
    };

    const mockSchedule: ScheduleEntity = {
        id: 1,
        dateAndTime: new Date(),
        price: 15,
        bookings: [mockBooking],
        filmId: 1,
        film: {
            id: 1,
            name: 'Mock Film',
            description: 'DESC',
            schedules: [],
            country: null,
            genres: [],
            release: 2009,
            preview: '',
            trailer: '',
            reviews: [],
            actors: [],
            slug: 'slug',
            author: null,
            previewPath: '',
            trailerPath: '',
            ratings: [],
        },
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                BookingsService,
                {
                    provide: getRepositoryToken(BookingsEntity),
                    useClass: Repository,
                },
                {
                    provide: ScheduleService,
                    useValue: {
                        getById: jest.fn(() => mockSchedule),
                    },
                },
            ],
        }).compile();

        bookingsService = module.get<BookingsService>(BookingsService);
        bookingsRepository = module.get<Repository<BookingsEntity>>(
            getRepositoryToken(BookingsEntity),
        );
        scheduleService = module.get<ScheduleService>(ScheduleService);
    });

    it('should be defined', () => {
        expect(bookingsService).toBeDefined();
    });

    describe('getByScheduleId', () => {
        it('should return an array of bookings for a specific schedule', async () => {
            jest.spyOn(bookingsRepository, 'find').mockResolvedValue([
                mockBooking,
            ]);

            const result = await bookingsService.getByScheduleId(1);

            expect(result).toEqual([mockBooking]);
        });
    });

    describe('book', () => {
        it('should create bookings for the specified seats', async () => {
            const seatsId = [1, 2];
            jest.spyOn(scheduleService, 'getById').mockResolvedValue(
                mockSchedule,
            );

            const mockInsertResult = {
                identifiers: [{ id: 1 }],
                generatedMaps: [],
                raw: [],
            };

            jest.spyOn(bookingsRepository, 'insert').mockResolvedValue(
                mockInsertResult,
            );

            const result = await bookingsService.book(1, 1, seatsId);

            expect(result).toBeTruthy();
        });
    });
});
