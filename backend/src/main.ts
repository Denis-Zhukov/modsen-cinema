import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { EnvFields } from './utils/env-fields';
import * as cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors({
        credentials: true,
        origin: 'http://localhost:3000',
    });
    app.setGlobalPrefix('api');

    const config = app.get(ConfigService);
    const port = config.get<number>(EnvFields.API_PORT);
    const host = config.get<string>(EnvFields.API_HOST);

    const swaggerConfig = new DocumentBuilder()
        .setTitle('Monema')
        .setDescription('The cinema API')
        .setVersion('1.0')
        .addTag('monema')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                description: 'Enter access token',
            },
            'auth',
        )
        .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, document);

    await app.listen(port || 3000, host, () => {
        console.log(`API started at ${host}:${port}`);
    });
}

bootstrap();
