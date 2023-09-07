import { motion } from 'framer-motion';
import { ButtonIcon, SplittedLongCard } from 'monema-ui';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import React, { ForwardedRef, forwardRef, useMemo } from 'react';
import { AiFillStar } from 'react-icons/ai';

import { DateTimeUtils } from '@/shared/lib/utils/DateTimeUtils';
import { TextUtils } from '@/shared/lib/utils/TextUtils';

import CancelIcon from './images/cancel.svg';
import {
    StyledDownWrapper, StyledRating, StyledSubtext,
    StyledSubtitle,
    StyledText,
    StyledTitle,
} from './styled';

type Props = {
    title: string
    preview: string
    date: string
    seats: number
    paid: number
    ticket: string
    rating: number
    onCancel?: () => void
};

export const BookingCard = forwardRef(({
    onCancel,
    title,
    preview,
    seats,
    paid,
    date,
    ticket,
    rating,
}: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const locale = useLocale();
    const dateAndTime = useMemo(() => DateTimeUtils.formatDate(date, locale), [date, locale]);

    const t = useTranslations('bookingCard');

    let seatText = '';
    if (locale === 'en' && seats > 1) {
        seatText = t('seats');
    } else if (locale === 'en') {
        seatText = t('seat');
    } else if (locale === 'ru') {
        seatText = t('seats') + TextUtils.getEndingWordByPlural(seats);
    }

    return (
        <div ref={ref}>
            <SplittedLongCard
                image={preview}
                edgeElement={<StyledRating>{rating} <AiFillStar/></StyledRating>}
                upperElement={(
                    <>
                        <StyledTitle>{title}</StyledTitle>
                        <StyledSubtitle>{dateAndTime}</StyledSubtitle>
                        <StyledSubtitle>{ticket}</StyledSubtitle>
                    </>
                )}
                downElement={(
                    <StyledDownWrapper>
                        <StyledSubtext>{seats} {seatText}</StyledSubtext>
                        <StyledText>{paid} $</StyledText>
                        {onCancel && (
                            <ButtonIcon
                                onClick={onCancel}
                                end={(
                                    <Image
                                        src={CancelIcon}
                                        alt="cancel-icon"
                                        width={16}
                                        height={18}
                                    />
                                )}
                            >{t('cancel')}
                            </ButtonIcon>
                        )}
                    </StyledDownWrapper>
                )}
            />
        </div>
    );
});

export const MBookingCard = motion(BookingCard);
