import React from 'react';

import { inriaSansFont, nunitoSansFont } from '@/shared/fonts';
import { VerticalSlider } from '@/shared/ui/VerticalSlider';

import { StyledShowNow, StyledTextBlock } from './styled';

export const ShowNow = () => (
    <StyledShowNow>
        <StyledTextBlock>
            <h2 className={nunitoSansFont.className}>Now in the Cinema</h2>
            <p className={inriaSansFont.className}>
                Watch great Movies in the best cinema! We care about your comfort. Book tickets
                right
                now!
            </p>
        </StyledTextBlock>
        <VerticalSlider slides={[
            {
                id: 1,
                src: '/film.png',
                title: 'Black Panther 3',
                badges: ['13+', 'IMAX', 'Action'],
                link: '/pantera',
            },
            {
                id: 2,
                src: '/morbius.png',
                title: 'Morbius',
                badges: ['16+', 'IMAX'],
                link: '/morbius',
            },
            {
                id: 3,
                src: '/sonic.png',
                title: 'Sonic',
                badges: ['Action', 'Cartoon'],
                link: '/sonic',
            },
        ]}
        />
    </StyledShowNow>
);
