import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { VideoPlayer } from '@/features/videoplayer/ui/VideoPlayer';
import { fade } from '@/shared/lib/animations';
import { poppinsFont } from '@/shared/lib/fonts';

import { StyledTrailerBlock } from './styled';

type Props = {
    trailer: string
};

export const TrailerBlock = ({ trailer }: Props) => {
    const t = useTranslations('film');

    return (
        <StyledTrailerBlock>
            <motion.h2
                className={poppinsFont.className}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 1,
                }}
            >{t('watchTrailer')}
            </motion.h2>
            <motion.div
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <VideoPlayer src={trailer}/>
            </motion.div>
        </StyledTrailerBlock>
    );
};
