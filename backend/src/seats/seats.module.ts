import { Module } from '@nestjs/common';
import { SeatsController } from './seats.controller';
import { SeatsService } from './seats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeatsEntity } from './seats.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SeatsEntity])],
    controllers: [SeatsController],
    providers: [SeatsService],
})
export class SeatsModule {}
