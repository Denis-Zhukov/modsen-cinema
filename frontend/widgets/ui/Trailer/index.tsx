import React from 'react';

import { nunitoSansFont } from '@/shared/fonts';
import { VideoPlayer } from '@/shared/ui/VideoPlayer';
import { StyledTextBlock, StyledTrailer } from '@/widgets/ui/Trailer/styled';

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
        <VideoPlayer src="https://www.youtube.com/watch?v=sKvXLJU5ri4" provider="youtube" preview/>
    </StyledTrailer>
);
