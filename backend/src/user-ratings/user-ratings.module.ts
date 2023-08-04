import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRatingsEntity } from './user-ratings.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserRatingsEntity])],
})
export class UserRatingsModule {}
