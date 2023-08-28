import { Module } from '@nestjs/common';
import { MailerModule as NestMailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { EnvFields } from '../../utils/env-fields';
import { MailerService } from './mailer.service';

@Module({
    providers: [MailerService],
    imports: [
        NestMailerModule.forRootAsync({
            useFactory: async (config: ConfigService) => ({
                transport: {
                    host: config.get(EnvFields.MAIL_HOST),
                    secure: false,
                    auth: {
                        user: config.get(EnvFields.MAIL_USER),
                        pass: config.get(EnvFields.MAIL_PASSWORD),
                    },
                },
                defaults: {
                    from: `"No Reply" <${config.get(EnvFields.MAIL_FROM)}>`,
                },
            }),
            inject: [ConfigService],
        }),
    ],
    exports: [MailerService],
})
export class MailerModule {}
