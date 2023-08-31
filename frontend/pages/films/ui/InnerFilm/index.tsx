'use client';

import { useCallback, useState } from 'react';

import { Reviews } from '@/features/films';
import { verticalCollapse } from '@/shared/lib/animations/verticalCollapse';
import { FilmInfo, TrailerBlock } from '@/widgets/films';
import { MBookingBlock } from '@/widgets/films/ui/BookingBlock';

import { StyledBackground } from './styled';

type InnerProps = {
    firstColor: [number, number, number]
    secondColor: [number, number, number]
    preview: string
    trailer: string
    film: {
        id: number
        description: string
        rating: number
        name: string
        release: number
        country: { name: string }
        genres: { name: string }[]
        author: { name: string, surname: string }
        actors: { name: string, surname: string }[]
        reviews: any
    }
};

export const InnerFilm = ({
    firstColor,
    secondColor,
    film,
    preview,
    trailer,
}: InnerProps) => {
    const [showBooking, setShowBooking] = useState(false);

    const handleShowBook = useCallback(() => setShowBooking(true), []);

    return (
        <StyledBackground $firstColor={firstColor} $secondColor={secondColor}>
            <FilmInfo
                bookClick={handleShowBook}
                rating={film.rating}
                name={film.name}
                year={film.release}
                country={film.country.name}
                genres={film.genres.map(({ name }) => name)}
                author={`${film.author.name} ${film.author.surname}`}
                actors={film.actors.map(({
                    name,
                    surname,
                }) => `${name} ${surname}`)}
                image={preview}
                description={film.description}
            />
            {showBooking
                && (
                    <MBookingBlock
                        variants={verticalCollapse}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        filmId={film.id}
                    />
                )}
            <TrailerBlock trailer={trailer}/>
            <Reviews reviews={film.reviews}/>
        </StyledBackground>
    );
};
