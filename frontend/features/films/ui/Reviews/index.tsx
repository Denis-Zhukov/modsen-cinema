'use client';

import { ReviewCard } from '@/entities/films';

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
        }) => (
            <ReviewCard
                key={id}
                author={`${user.name} ${user.surname}`}
                body={review}
            />
        ))}
    </StyledReviews>
);
