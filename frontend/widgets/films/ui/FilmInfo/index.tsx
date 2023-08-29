'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import { nunitoSansFont, poppinsFont } from '@/shared/lib/fonts';
import { NavButton } from '@/shared/ui/NavButton';

import Arrow from './images/arrow.png';
import Star from './images/star.png';
import {
    StyledBookingBlock,
    StyledDescription,
    StyledFilmInfo, StyledInfo,
    StyledInfoBlock,
    StyledNextFilm,
    StyledTopBlock,
} from './styled';

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

    const t = useTranslations('filmInfo');
    return (
        <StyledFilmInfo className={nunitoSansFont.className}>
            <StyledTopBlock>
                <h1>{name}</h1>
                <StyledNextFilm href="#" className={poppinsFont.className}>
                    <span>{t('nextMovie')}</span>
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
                        <span>{t('releaseYear')}: </span>
                        {year}
                    </div>
                    <div>
                        <span>{t('country')}: </span>
                        {country}
                    </div>
                    <div>
                        <span>{t('country')}: </span>
                        {genresString}
                    </div>
                    <div>
                        <span>{t('author')}: </span>
                        {author}
                    </div>
                    <div>
                        <span>{t('actors')}: </span>
                        {actorsString}
                    </div>
                    <StyledBookingBlock>
                        <NavButton path="/" variant="primary">{t('bookNow')}</NavButton>
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
