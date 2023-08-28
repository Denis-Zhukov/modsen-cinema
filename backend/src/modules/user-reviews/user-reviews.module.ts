import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserReviewsEntity } from './user-reviews.entity';
import { UserReviewsService } from './user-reviews.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserReviewsEntity])],
    providers: [UserReviewsService],
    exports: [UserReviewsService],
})
export class UserReviewsModule {}
