import React from 'react';

import { FilmService } from '@/shared/api/services/FilmService';
import { Urls } from '@/shared/config/constants/Urls';
import { nunitoSansFont } from 'shared/lib/fonts';

import { StyledTextBlock, StyledTrailer, StyledVideoPlayer } from './styled';

export const Trailer = async () => {
    const { data } = await FilmService.getMainFilm();
    const trailerUrl = `${Urls.BASE_URL}/${data.trailer}`;
    const previewUrl = `${Urls.BASE_URL}/${data.preview}`;

    return (
        <StyledTrailer className={nunitoSansFont.className}>
            <StyledTextBlock>
                <h2>{data.name}</h2>
                <p>{data.description}</p>
            </StyledTextBlock>
            <StyledVideoPlayer src={trailerUrl} preview={previewUrl} muted/>
        </StyledTrailer>
    );
};
