import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { EnvFields } from './typing/env-fields';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

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
