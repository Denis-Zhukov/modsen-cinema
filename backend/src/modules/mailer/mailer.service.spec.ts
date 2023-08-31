import { Test, TestingModule } from '@nestjs/testing';
import { MailerService } from './mailer.service';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';

describe('MailerService', () => {
    let mailerService: MailerService;
    let nestMailerService: NestMailerService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MailerService,
                {
                    provide: NestMailerService,
                    useValue: {
                        sendMail: jest.fn(),
                    },
                },
            ],
        }).compile();

        mailerService = module.get<MailerService>(MailerService);
        nestMailerService = module.get<NestMailerService>(NestMailerService);
    });

    it('should be defined', () => {
        expect(mailerService).toBeDefined();
    });

    describe('notifyAll', () => {
        it('should send emails with given subject and text', async () => {
            const subject = 'Test Subject';
            const text = 'Test Text';
            const emails = ['test1@example.com', 'test2@example.com'];

            await mailerService.notifyAll(subject, text, emails);

            expect(nestMailerService.sendMail).toHaveBeenCalledWith({
                to: emails,
                subject,
                text,
            });
        });
    });
});
