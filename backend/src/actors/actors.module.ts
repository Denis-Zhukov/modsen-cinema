import { Module } from '@nestjs/common';
import { ActorsController } from './actors.controller';
import { ActorsEntity } from './actors.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorsService } from './actors.service';

@Module({
    imports: [TypeOrmModule.forFeature([ActorsEntity])],
    controllers: [ActorsController],
    providers: [ActorsService],
})
export class ActorsModule {}
