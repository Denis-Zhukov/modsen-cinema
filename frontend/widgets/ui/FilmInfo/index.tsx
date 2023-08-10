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
    genre: string,
    author: string,
    actors: string[],
    image: string
};

export const FilmInfo = ({
    name,
    year,
    country,
    genre,
    author,
    actors,
    image,
}: Props) => (
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
                    {genre}
                </div>
                <div>
                    <span>Author: </span>
                    {author}
                </div>
                <div>
                    <span>Actors: </span>
                    {actors.join(', ')}
                </div>
                <StyledBookingBlock>
                    <NavButton path="/" variant="primary">Book Now!</NavButton>
                    <div>
                        <span className={poppinsFont.className}>8,1 </span>
                        <Image src={Star} alt="Star" width={39} height={38}/>
                    </div>
                </StyledBookingBlock>
            </StyledInfo>
        </StyledInfoBlock>
        <StyledDescription>
            Queen Ramonda, Shuri, MBaku, Okoye and the Dora Milaje fight to protect their nation
            from intervening world powers in the wake of King TChallas death. As the Wakandans
            strive to embrace their next chapter, the heroes must band together with Nakia and
            Everett Ross to forge a new path for their beloved kingdom.
        </StyledDescription>
    </StyledFilmInfo>
);
