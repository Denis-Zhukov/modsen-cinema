import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsEntity } from './films.entity';
import { FilesModule } from '../files/files.module';
import { GenresModule } from '../genres/genres.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([FilmsEntity]),
        FilesModule,
        GenresModule,
    ],
    controllers: [FilmsController],
    providers: [FilmsService],
})
export class FilmsModule {}
