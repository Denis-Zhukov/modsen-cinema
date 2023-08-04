import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsEntity } from './films.entity';

@Module({
    imports: [TypeOrmModule.forFeature([FilmsEntity])],
    controllers: [FilmsController],
    providers: [FilmsService],
})
export class FilmsModule {}
