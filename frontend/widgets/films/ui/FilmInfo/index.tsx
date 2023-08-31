'use client';

import { motion } from 'framer-motion';
import { Button } from 'monema-ui';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import { fade, slideLeft, slideRight } from '@/shared/lib/animations';
import { nunitoSansFont, poppinsFont } from '@/shared/lib/fonts';

import Arrow from './images/arrow.png';
import Star from './images/star.png';
import {
    MImage,
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
    bookClick?: () => void
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
    bookClick,
}: Props) => {
    const genresString = genres.length ? genres.join(' / ') : 'Unknown';
    const actorsString = actors.length ? actors.join(', ') : 'Unknown';

    const t = useTranslations('filmInfo');
    return (
        <StyledFilmInfo className={nunitoSansFont.className}>
            <StyledTopBlock>
                <motion.h1
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >{name}
                </motion.h1>
                <StyledNextFilm href="#" className={poppinsFont.className}>
                    <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <span>{t('nextMovie')}</span>
                        <Image src={Arrow} alt="Next"/>
                    </motion.div>
                </StyledNextFilm>
            </StyledTopBlock>
            <StyledInfoBlock>
                <MImage
                    src={image}
                    alt="Film"
                    width={410}
                    height={600}
                    variants={fade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                />
                <StyledInfo>
                    <motion.div
                        variants={fade}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        viewport={{ once: true }}
                    >
                        <span>{t('releaseYear')}: </span>
                        {year}
                    </motion.div>
                    <motion.div
                        variants={fade}
                        initial="hidden"
                        whileInView="visible"
                        custom={2}
                        viewport={{ once: true }}
                    >
                        <span>{t('country')}: </span>
                        {country}
                    </motion.div>
                    <motion.div
                        variants={fade}
                        initial="hidden"
                        whileInView="visible"
                        custom={3}
                        viewport={{ once: true }}
                    >
                        <span>{t('country')}: </span>
                        {genresString}
                    </motion.div>
                    <motion.div
                        variants={fade}
                        initial="hidden"
                        whileInView="visible"
                        custom={4}
                        viewport={{ once: true }}
                    >
                        <span>{t('author')}: </span>
                        {author}
                    </motion.div>
                    <motion.div
                        variants={fade}
                        initial="hidden"
                        whileInView="visible"
                        custom={5}
                        viewport={{ once: true }}
                    >
                        <span>{t('actors')}: </span>
                        {actorsString}
                    </motion.div>
                    <StyledBookingBlock
                        variants={fade}
                        initial="hidden"
                        whileInView="visible"
                        custom={5}
                        viewport={{ once: true }}
                    >
                        <Button variant="primary" onClick={bookClick}>{t('bookNow')}</Button>
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
