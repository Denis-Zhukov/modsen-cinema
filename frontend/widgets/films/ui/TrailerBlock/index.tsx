import { useTranslations } from 'next-intl';

import { StyledTrailerBlock } from '@/pages/Film/styled';
import { poppinsFont } from '@/shared/lib/fonts';
import { VideoPlayer } from '@/shared/ui/VideoPlayer';

type Props = {
    trailer: string
};

export const TrailerBlock = ({ trailer }: Props) => {
    const t = useTranslations('film');

    return (
        <StyledTrailerBlock>
            <h2 className={poppinsFont.className}>{t('watchTrailer')}</h2>
            <VideoPlayer src={trailer}/>
        </StyledTrailerBlock>
    );
};
