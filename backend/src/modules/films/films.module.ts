import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsEntity } from './films.entity';
import { FilesModule } from '../files/files.module';
import { GenresModule } from '../genres/genres.module';
import { ScheduleModule } from '../schedule/schedule.module';
import { UserReviewsModule } from '../user-reviews/user-reviews.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([FilmsEntity]),
        UserReviewsModule,
        FilesModule,
        GenresModule,
        ScheduleModule,
    ],
    controllers: [FilmsController],
    providers: [FilmsService],
})
export class FilmsModule {}
