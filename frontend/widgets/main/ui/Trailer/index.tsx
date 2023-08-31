import React from 'react';

import { FilmService } from '@/shared/api/services/FilmService';
import { Urls } from '@/shared/config/constants/Urls';
import { constFade } from '@/shared/lib/animations';
import { nunitoSansFont } from '@/shared/lib/fonts';
import { VideoPlayer } from '@/shared/ui/VideoPlayer';

import {
    StyledTextBlock,
    StyledTrailer,
    StyledVideoPlayerWrapper,
} from './styled';

export const Trailer = async () => {
    const { data } = await FilmService.getMainFilm();

    if (!data) return <h2>No such main film</h2>;

    const trailerUrl = `${Urls.BASE_URL}/${data.trailer}`;
    const previewUrl = `${Urls.BASE_URL}/${data.preview}`;

    return (
        <StyledTrailer className={nunitoSansFont.className}>
            <StyledTextBlock variants={constFade} initial="hidden" whileInView="visible">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
            </StyledTextBlock>
            <StyledVideoPlayerWrapper
                variants={constFade}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.4,
                }}
            >
                <VideoPlayer src={trailerUrl} preview={previewUrl} muted/>
            </StyledVideoPlayerWrapper>
        </StyledTrailer>
    );
};
