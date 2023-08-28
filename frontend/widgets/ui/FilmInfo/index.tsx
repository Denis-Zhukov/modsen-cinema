import Image from 'next/image';
import React from 'react';

import { NavButton } from '@/features/NavButton';
import { nunitoSansFont, poppinsFont } from '@/shared/fonts';
import {
    StyledBookingBlock,
    StyledDescription,
    StyledFilmInfo, StyledInfo,
    StyledInfoBlock,
    StyledNextFilm,
    StyledTopBlock,
} from '@/widgets/ui/FilmInfo/styled';

import Arrow from './images/arrow.png';
import Star from './images/star.png';

type Props = {
    name: string,
    year: number,
    country: string,
    genres: string[],
    author: string,
    actors: string[],
    image: string,
    description: string,
    rating: number,
};

export const FilmInfo = ({
    name,
    year,
    country,
    genres,
    author,
    actors,
    image,
    description,
    rating,
}: Props) => {
    const genresString = genres.length ? genres.join(' / ') : 'Unknown';
    const actorsString = actors.length ? actors.join(', ') : 'Unknown';

    return (
        <StyledFilmInfo className={nunitoSansFont.className}>
            <StyledTopBlock>
                <h1>{name}</h1>
                <StyledNextFilm href="#" className={poppinsFont.className}>
                    <span>Move to the next movie</span>
                    <Image src={Arrow} alt="Next"/>
                </StyledNextFilm>
            </StyledTopBlock>
            <StyledInfoBlock>
                <Image
                    src={image}
                    alt="Film"
                    width={410}
                    height={600}
                />
                <StyledInfo>
                    <div>
                        <span>Release year: </span>
                        {year}
                    </div>
                    <div>
                        <span>Country: </span>
                        {country}
                    </div>
                    <div>
                        <span>Genre: </span>
                        {genresString}
                    </div>
                    <div>
                        <span>Author: </span>
                        {author}
                    </div>
                    <div>
                        <span>Actors: </span>
                        {actorsString}
                    </div>
                    <StyledBookingBlock>
                        <NavButton path="/" variant="primary">Book Now!</NavButton>
                        <div>
                            <span className={poppinsFont.className}>{rating}</span>
                            <Image src={Star} alt="Star" width={39} height={38}/>
                        </div>
                    </StyledBookingBlock>
                </StyledInfo>
            </StyledInfoBlock>
            <StyledDescription>{description}</StyledDescription>
        </StyledFilmInfo>
    );
};
