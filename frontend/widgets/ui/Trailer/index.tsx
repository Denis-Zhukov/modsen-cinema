import React from 'react';

import { Urls } from '@/shared/api/Urls';
import { nunitoSansFont } from '@/shared/fonts';
import { VideoPlayer } from '@/shared/ui/VideoPlayer';

import { StyledTextBlock, StyledTrailer } from './styled';

export const Trailer = () => (
    <StyledTrailer className={nunitoSansFont.className}>
        <StyledTextBlock>
            <h2>The Batman</h2>
            <p>
                Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his
                investigation leads him to uncover a web of corruption, linked to his own dark
                past.
            </p>
        </StyledTextBlock>
        <VideoPlayer src={Urls.getMainTrailer()} preview="https://s2-techtudo.glbimg.com/sswBkHxGpNaBp-mfBIml7szPirs=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/p/o/nk8Ar7QuC2NgmSeXxaVg/pantera-negra-wakanda-forever-para-sempre-sinopse-elenco-trailer-filme.jpg"/>
    </StyledTrailer>
);
