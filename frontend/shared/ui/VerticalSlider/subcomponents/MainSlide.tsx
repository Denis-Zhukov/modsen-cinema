import { AnimatePresence } from 'framer-motion';
import { Badge } from 'monema-ui';
import Image from 'next/image';
import Link from 'next/link';

import { fade } from '@/shared/lib/animations/fade';
import { poppinsFont } from '@/shared/lib/fonts';

import { StyledBadges, StyledMainSlide } from '../styled';

type Props = {
    id:number,
    title: string,
    badges: string[],
    link: string,
    image: string,
};

export const MainSlide = ({
    id,
    title,
    badges,
    link,
    image,
}: Props) => (

    <AnimatePresence mode="popLayout">
        <StyledMainSlide
            key={id}
            className={poppinsFont.className}
            variants={fade}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <Link href={link}>
                <Image
                    src={image}
                    alt={title}
                    width={260}
                    height={350}
                />
            </Link>
            <h3>{title}</h3>
            <StyledBadges>
                {badges.map((text) => <Badge key={text}>{text}</Badge>)}
            </StyledBadges>
        </StyledMainSlide>

    </AnimatePresence>
);
