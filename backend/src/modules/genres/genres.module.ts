import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenresEntity } from './genres.entity';
import { GenresController } from './genres.controller';

@Module({
    imports: [TypeOrmModule.forFeature([GenresEntity])],
    providers: [GenresService],
    controllers: [GenresController],
    exports: [GenresService],
})
export class GenresModule {}
