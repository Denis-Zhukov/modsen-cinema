import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ActorsModule } from './modules/actors/actors.module';
import { UsersModule } from './modules/users/users.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { FilmsModule } from './modules/films/films.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { SeatsModule } from './modules/seats/seats.module';
import { GenresModule } from './modules/genres/genres.module';
import { AuthorsModule } from './modules/authors/authors.module';
import { CountriesModule } from './modules/countries/countries.module';
import { UserRatingsModule } from './modules/user-ratings/user-ratings.module';
import { UserReviewsModule } from './modules/user-reviews/user-reviews.module';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { RolesModule } from './modules/roles/roles.module';
import { AuthModule } from './modules/auth/auth.module';
import { TokenModule } from './modules/token/token.module';
import { EnvFields } from './utils/env-fields';
import configurations from './configurations';
import { JwtStrategy } from './strategies/jwt.strategy';
import { FilesModule } from './modules/files/files.module';
import { paths } from './utils/constants';
import { GoogleStrategy } from './strategies/google.strategy';
import { GithubStrategy } from './strategies/github.strategy';
import { FacebookStrategy } from './strategies/facebook.strategy';
import { VisitsModule } from './modules/visits/visits.module';
import { SubscribersModule } from './modules/subscribers/subscribers.module';
import { MailerModule } from './modules/mailer/mailer.module';
import { SexModule } from './modules/sex/sex.module';
import { utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
    imports: [
        WinstonModule.forRoot({
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.ms(),
                        utilities.format.nestLike('Monema', {
                            colors: true,
                            prettyPrint: true,
                        }),
                    ),
                }),
            ],
        }),

        ConfigModule.forRoot({
            isGlobal: true,
            load: [configurations],
        }),

        ServeStaticModule.forRoot({
            rootPath: paths.publicRoute,
            serveRoot: '/static',
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
                    logging: false,
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

        RolesModule,

        AuthModule,

        TokenModule,

        FilesModule,

        VisitsModule,

        SubscribersModule,

        MailerModule,

        SexModule,
    ],
    controllers: [],
    providers: [JwtStrategy, GoogleStrategy, GithubStrategy, FacebookStrategy],
})
export class AppModule {}
