import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubscribersEntity } from './subscribers.entity';
import { Repository } from 'typeorm';
import { MailerService } from '../mailer/mailer.service';

@Injectable()
export class SubscribersService {
    constructor(
        @InjectRepository(SubscribersEntity)
        private readonly subscribersRepository: Repository<SubscribersEntity>,
        private readonly mailService: MailerService,
    ) {}

    async subscribe(email: string) {
        const newSubscriber = this.subscribersRepository.create({
            email: email.toLowerCase(),
        });
        return this.subscribersRepository.save(newSubscriber);
    }

    async unsubscribe(email: string) {
        const subscriber = await this.subscribersRepository.findOne({
            where: { email },
        });
        if (subscriber) await this.subscribersRepository.remove(subscriber);
    }

    async notifyAll(subject: string, text: string) {
        const subscribers = await this.subscribersRepository.find();
        return this.mailService.notifyAll(
            subject,
            text,
            subscribers.map(({ email }) => email),
        );
    }
}
