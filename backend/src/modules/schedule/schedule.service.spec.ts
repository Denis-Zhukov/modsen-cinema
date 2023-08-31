import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleService } from './schedule.service';
import { Repository } from 'typeorm';
import { ScheduleEntity } from './schedule.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ScheduleService', () => {
    let scheduleService: ScheduleService;
    let scheduleRepository: Repository<ScheduleEntity>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ScheduleService,
                {
                    provide: getRepositoryToken(ScheduleEntity),
                    useClass: Repository,
                },
            ],
        }).compile();

        scheduleService = module.get<ScheduleService>(ScheduleService);
        scheduleRepository = module.get<Repository<ScheduleEntity>>(
            getRepositoryToken(ScheduleEntity),
        );
    });

    it('should be defined', () => {
        expect(scheduleService).toBeDefined();
    });

    describe('getById', () => {
        it('should return a specific schedule', async () => {
            const scheduleId = 1;
            const schedule: ScheduleEntity = {} as ScheduleEntity;
            jest.spyOn(scheduleRepository, 'findOne').mockResolvedValue(
                schedule,
            );

            const result = await scheduleService.getById(scheduleId);

            expect(result).toBe(schedule);
        });
    });
});
