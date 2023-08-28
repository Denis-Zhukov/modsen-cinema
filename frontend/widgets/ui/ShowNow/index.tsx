import { useTranslations } from 'next-intl';
import { inriaSansFont, nunitoSansFont } from 'shared/lib/fonts';

import { FilmService } from '@/shared/api';
import { Urls } from '@/shared/config/constants/Urls';

import { StyledShowNow, StyledSlider, StyledTextBlock } from './styled';

const TextShowNow = () => {
    const t = useTranslations('showNow');
    return (
        <StyledTextBlock>
            <h2 className={nunitoSansFont.className}>{t('title')}</h2>
            <p className={inriaSansFont.className}>{t('text')}</p>
        </StyledTextBlock>
    );
};

export const ShowNow = async () => {
    const { data } = await FilmService.getRelevantFilms();

    const slides = data.map((film) => ({
        id: film.id,
        name: film.name,
        preview: `${Urls.BASE_URL}/${film.preview}`,
        badges: film.genres.map(({ name }) => name),
        url: `film/${film.slug}`,
    }));

    return (
        <StyledShowNow>
            <TextShowNow/>
            <StyledSlider slides={slides ?? []}/>
        </StyledShowNow>
    );
};
