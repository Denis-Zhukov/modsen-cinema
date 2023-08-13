import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsEntity } from './films.entity';
import { FilesModule } from '../files/files.module';

@Module({
    imports: [TypeOrmModule.forFeature([FilmsEntity]), FilesModule],
    controllers: [FilmsController],
    providers: [FilmsService],
})
export class FilmsModule {}
