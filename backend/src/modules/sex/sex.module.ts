import { Module } from '@nestjs/common';
import { SexService } from './sex.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SexEntity } from './sex.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SexEntity])],
    providers: [SexService],
    exports: [SexService],
})
export class SexModule {}
