import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubscribersService } from './subscribers.service';
import { SubscribersEntity } from './subscribers.entity';
import { MailerService } from '../mailer/mailer.service';

describe('SubscribersService', () => {
    let subscribersService: SubscribersService;
    let mockSubscribersRepository: Partial<
        Record<keyof Repository<SubscribersEntity>, jest.Mock>
    >;
    let mockMailerService: Partial<Record<keyof MailerService, jest.Mock>>;

    beforeEach(async () => {
        mockSubscribersRepository = {
            create: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
        };

        mockMailerService = {
            notifyAll: jest.fn(),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SubscribersService,
                {
                    provide: getRepositoryToken(SubscribersEntity),
                    useValue: mockSubscribersRepository,
                },
                {
                    provide: MailerService,
                    useValue: mockMailerService,
                },
            ],
        }).compile();

        subscribersService = module.get<SubscribersService>(SubscribersService);
    });

    describe('subscribe', () => {
        it('should create and save a new subscriber', async () => {
            const mockSubscriber = { id: 1, email: 'test@example.com' };
            mockSubscribersRepository.create.mockReturnValue(mockSubscriber);
            mockSubscribersRepository.save.mockResolvedValue(mockSubscriber);

            const result = await subscribersService.subscribe(
                'test@example.com',
            );

            expect(mockSubscribersRepository.create).toHaveBeenCalledWith({
                email: 'test@example.com',
            });
            expect(mockSubscribersRepository.save).toHaveBeenCalledWith(
                mockSubscriber,
            );
            expect(result).toEqual(mockSubscriber);
        });
    });

    describe('notifyAll', () => {
        it('should notify all subscribers with the given subject and text', async () => {
            const mockSubscribers = [
                { id: 1, email: 'subscriber1@example.com' },
                { id: 2, email: 'subscriber2@example.com' },
            ];
            const mockSubject = 'Test Subject';
            const mockText = 'Test Text';

            mockSubscribersRepository.find.mockResolvedValue(mockSubscribers);

            await subscribersService.notifyAll(mockSubject, mockText);

            expect(mockSubscribersRepository.find).toHaveBeenCalled();
            expect(mockMailerService.notifyAll).toHaveBeenCalledWith(
                mockSubject,
                mockText,
                ['subscriber1@example.com', 'subscriber2@example.com'],
            );
        });

        it('should not notify subscribers if no subscribers are found', async () => {
            mockSubscribersRepository.find.mockResolvedValue([]);

            await subscribersService.notifyAll('Test Subject', 'Test Text');

            expect(mockSubscribersRepository.find).toHaveBeenCalled();
            expect(mockMailerService.notifyAll).toHaveBeenCalled();
        });
    });
});
