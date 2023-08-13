import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { poppinsFont } from '@/shared/fonts';
import { Badge } from '@/shared/ui/Badge';

import { StyledBadges, StyledMainSlide } from './styled';

type Props = {
    title: string,
    badges: string[],
    link: string,
    image: string,
};

export const MainSlide = ({
    title, badges, link, image,
}:Props) => (
    <StyledMainSlide className={poppinsFont.className}>
        <Link href={link}>
            <Image
                src={image}
                alt=""
                width={262}
                height={350}
            />
        </Link>
        <h3>{title}</h3>
        <StyledBadges>
            {badges.map((text) => <Badge key={text}>{text}</Badge>)}
        </StyledBadges>
    </StyledMainSlide>
);