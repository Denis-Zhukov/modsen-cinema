import { useTranslations } from 'next-intl';
import React from 'react';

import { FilmService } from '@/shared/api/services/FilmService';
import { Urls } from '@/shared/config/constants/Urls';
import { constFade } from '@/shared/lib/animations';
import { nunitoSansFont } from '@/shared/lib/fonts';
import { VideoPlayer } from '@/shared/ui/VideoPlayer';

import {
    StyledText,
    StyledTextBlock,
    StyledTrailer,
    StyledVideoPlayerWrapper,
} from './styled';

type Props = {
    name: string,
    description: string,
    trailer: string,
    preview: string
};

const InnerTrailer = ({
    name, description, trailer, preview,
}: Props) => {
    const t = useTranslations('trailer');
    if (!name && !description) {
        return (
            <StyledText
                variants={constFade}
                initial="hidden"
                whileInView="visible"
                className={nunitoSansFont.className}
            >{t('noMovie')}
            </StyledText>
        );
    }

    return (
        <StyledTrailer className={nunitoSansFont.className}>
            <StyledTextBlock variants={constFade} initial="hidden" whileInView="visible">
                <h2>{name}</h2>
                <p>{description}</p>
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
                <VideoPlayer src={trailer} preview={preview} muted/>
            </StyledVideoPlayerWrapper>
        </StyledTrailer>
    );
};

export const Trailer = async () => {
    const { data } = await FilmService.getMainFilm();

    const trailerUrl = `${Urls.BASE_URL}/${data.trailer}`;
    const previewUrl = `${Urls.BASE_URL}/${data.preview}`;

    return (
        <InnerTrailer
            trailer={trailerUrl}
            preview={previewUrl}
            name={data.name}
            description={data.description}
        />
    );
};
