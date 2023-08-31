'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
    BaseHTMLAttributes, ForwardedRef, forwardRef, useCallback, useState,
} from 'react';

import { nunitoSansFont } from '@/shared/lib/fonts';

import ReadMoreIcon from './images/read-more-icon.svg';
import { StyledCard, StyledHugeText, StyledReadMore } from './styled';

type Props = {
    author: string,
    body: string,
} & BaseHTMLAttributes<HTMLDivElement>;

export const ReviewCard = forwardRef(({
    author,
    body,
    className,
    ...props
}: Props, ref:ForwardedRef<HTMLDivElement>) => {
    const [show, setShow] = useState(false);
    const handleShowMore = useCallback(() => setShow((prev) => !prev), []);

    const t = useTranslations('reviewCard');

    return (
        <StyledCard ref={ref} className={`${nunitoSansFont.className} ${className}`} {...props}>
            <h3>Review</h3>
            <h4>From {author}</h4>
            <StyledHugeText $show={show}>{body}</StyledHugeText>
            <StyledReadMore onClick={handleShowMore}>
                <div>{show ? t('hide') : t('show')}</div>
                <Image src={ReadMoreIcon} alt="Read more" width={40} height={40}/>
            </StyledReadMore>
        </StyledCard>
    );
});

export const MReviewCard = motion(ReviewCard);
