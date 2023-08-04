import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserReviewsEntity } from './user-reviews.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserReviewsEntity])],
})
export class UserReviewsModule {}
