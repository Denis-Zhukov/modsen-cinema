'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { inriaSansFont, nunitoSansFont } from '@/shared/fonts';
import { useGetRelevantFilmsQuery } from '@/shared/store/rtk/film.rtk';

import { StyledShowNow, StyledSlider, StyledTextBlock } from './styled';

export const ShowNow = () => {
    const { data } = useGetRelevantFilmsQuery({});
    const t = useTranslations('showNow');

    return (
        <StyledShowNow>
            <StyledTextBlock>
                <h2 className={nunitoSansFont.className}>{t('title')}</h2>
                <p className={inriaSansFont.className}>{t('text')}</p>
            </StyledTextBlock>
            <StyledSlider slides={data ?? []}/>
        </StyledShowNow>
    );
};
