import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscribersEntity } from './subscribers.entity';
import { SubscribersController } from './subscribers.controller';
import { SubscribersService } from './subscribers.service';
import { MailerModule } from '../mailer/mailer.module';

@Module({
    imports: [TypeOrmModule.forFeature([SubscribersEntity]), MailerModule],
    controllers: [SubscribersController],
    providers: [SubscribersService],
})
export class SubscribersModule {}
