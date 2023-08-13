import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { EnvFields } from './utils/env-fields';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();
    app.setGlobalPrefix('api');

    const config = app.get(ConfigService);
    const port = config.get<number>(EnvFields.API_PORT);
    const host = config.get<string>(EnvFields.API_HOST);

    await app.listen(port || 3000, host, () => {
        console.log(`API started at ${host}:${port}`);
    });
}

bootstrap();
