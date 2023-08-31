'use client';

import { MReviewCard } from '@/entities/films';
import { fade } from '@/shared/lib/animations';

import { StyledReviews } from './styled';

type Props = {
    reviews: { id: number, user: { name: string, surname: string }, review: string }[]
};

export const Reviews = ({ reviews }: Props) => (
    <StyledReviews>
        {reviews.map(({
            id,
            user,
            review,
        }, i) => (
            <MReviewCard
                custom={i + 1}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                key={id}
                author={`${user.name} ${user.surname}`}
                body={review}
            />
        ))}
    </StyledReviews>
);
