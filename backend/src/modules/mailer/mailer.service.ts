import { Injectable } from '@nestjs/common';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailerService {
    constructor(private mailerService: NestMailerService) {}

    async notifyAll(subject: string, text: string, emails: string[]) {
        return await this.mailerService.sendMail({
            to: emails,
            subject,
            text,
        });
    }
}
