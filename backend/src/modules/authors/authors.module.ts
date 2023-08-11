import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsEntity } from './authors.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AuthorsEntity])],
    controllers: [AuthorsController],
    providers: [AuthorsService],
})
export class AuthorsModule {}
