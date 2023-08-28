import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import React, { useCallback, useEffect, useMemo } from 'react';
import { AiFillStar } from 'react-icons/ai';

import { DateTimeUtils } from '@/shared/lib/utils/DateTimeUtils';
import { TextUtils } from '@/shared/lib/utils/TextUtils';
import { toastSuccess } from '@/shared/lib/utils/toast';
import { useCancelBookingsMutation } from '@/shared/model/store/rtk/booking.rtk';
import { Notice } from '@/shared/config/constants/Notice';
import { ButtonIcon } from '@/shared/ui/ButtonIcon';
import { SplittedLongCard } from '@/shared/ui/SplittedLongCard';

import CancelIcon from './images/cancel.svg';
import {
    StyledDownWrapper, StyledRating, StyledSubtext,
    StyledSubtitle,
    StyledText,
    StyledTitle,
} from './styled';

type Props = {
    scheduleId?: number
    title: string
    preview: string
    date: string
    seats: number
    paid: number
    ticket: string
    rating: number
};

export const BookingCard = ({
    scheduleId,
    title,
    preview,
    seats,
    paid,
    date,
    ticket,
    rating,
}: Props) => {
    const locale = useLocale();
    const dateAndTime = useMemo(() => DateTimeUtils.formatDate(date, locale), [date, locale]);

    const [cancel, {
        isSuccess,
        error,
    }] = useCancelBookingsMutation({});
    const t = useTranslations('bookingCard');
    useEffect(() => {
        if (isSuccess) toastSuccess(Notice.CANCEL_BOOKINGS);
    }, [isSuccess, error]);

    const handleCancel = useCallback(() => {
        if (!scheduleId) return;
        cancel({ scheduleId });
    }, [cancel, scheduleId]);

    let seatText = '';
    if (locale === 'en' && seats > 1) {
        seatText = t('seats');
    } else if (locale === 'en') {
        seatText = t('seat');
    } else if (locale === 'ru') {
        seatText = t('seats') + TextUtils.getEndingWordByPlural(seats);
    }

    return (
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
                    {scheduleId && (
                        <ButtonIcon
                            onClick={handleCancel}
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
    );
};
