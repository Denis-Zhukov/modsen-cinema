import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvFields } from './typing/env-fields';
import { ActorsModule } from './actors/actors.module';
import { UsersModule } from './users/users.module';
import { BookingsModule } from './bookings/bookings.module';
import { FilmsModule } from './films/films.module';
import { ScheduleModule } from './schedule/schedule.module';
import { SeatsModule } from './seats/seats.module';
import { GenresModule } from './genres/genres.module';
import { AuthorsModule } from './authors/authors.module';
import { CountriesModule } from './countries/countries.module';
import { UserRatingsModule } from './user-ratings/user-ratings.module';
import { UserReviewsModule } from './user-reviews/user-reviews.module';
import * as path from 'path';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),

        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) =>
                ({
                    type: config.get<string>(EnvFields.TYPEORM_CONNECTION),
                    username: config.get<string>(EnvFields.TYPEORM_USERNAME),
                    password: config.get<string>(EnvFields.TYPEORM_PASSWORD),
                    database: config.get<string>(EnvFields.TYPEORM_DATABASE),
                    host: config.get<string>(EnvFields.TYPEORM_HOST),
                    port: config.get<number>(EnvFields.TYPEORM_PORT),
                    entities: [
                        path.resolve(
                            path.resolve(),
                            'dist/**/*.entity{.ts,.js}',
                        ),
                    ],
                    synchronize: true,
                    autoLoadEntities: true,
                    logging: true,
                } as TypeOrmModuleOptions),
        }),

        ActorsModule,

        UsersModule,

        BookingsModule,

        FilmsModule,

        ScheduleModule,

        SeatsModule,

        GenresModule,

        AuthorsModule,

        CountriesModule,

        UserRatingsModule,

        UserReviewsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
