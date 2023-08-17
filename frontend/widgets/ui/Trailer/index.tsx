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
        <VideoPlayer src={Urls.MAIN_TRAILER} preview={Urls.MAIN_PREVIEW}/>
    </StyledTrailer>
);
