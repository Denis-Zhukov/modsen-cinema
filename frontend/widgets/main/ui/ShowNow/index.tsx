import { useTranslations } from 'next-intl';

import { FilmService } from '@/shared/api';
import { Urls } from '@/shared/config/constants/Urls';
import { slideLeft, slideRight } from '@/shared/lib/animations';
import { inriaSansFont, nunitoSansFont } from '@/shared/lib/fonts';
import { VerticalSlider } from '@/shared/ui/VerticalSlider';

import { StyledShowNow, StyledTextBlock } from './styled';

const TextShowNow = () => {
    const t = useTranslations('showNow');
    return (
        <StyledTextBlock variants={slideLeft} initial="hidden" whileInView="visible">
            <h2 className={nunitoSansFont.className}>{t('title')}</h2>
            <p className={inriaSansFont.className}>{t('text')}</p>
        </StyledTextBlock>
    );
};

export const ShowNow = async () => {
    const { data } = await FilmService.getRelevantFilms();
    const slides = data.map((film: any) => ({
        id: film.id,
        name: film.name,
        preview: `${Urls.BASE_URL}/${film.preview}`,
        badges: film.genres.map(({ name }: { name: string }) => name),
        url: `film/${film.slug}`,
    }));

    return (
        <StyledShowNow>
            <TextShowNow/>
            <VerticalSlider
                slides={slides ?? []}
            />
        </StyledShowNow>
    );
};
