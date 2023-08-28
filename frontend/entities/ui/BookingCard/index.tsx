import Image from 'next/image';
import React, { useCallback, useEffect, useMemo } from 'react';
import { AiFillStar } from 'react-icons/ai';

import { DateTimeUtils } from '@/shared/lib/DateTimeUtils';
import { toastSuccess } from '@/shared/lib/toast';
import { useCancelBookingsMutation } from '@/shared/store/rtk/booking.rtk';
import { Notice } from '@/shared/typing/constants/Notice';
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
    const dateAndTime = useMemo(() => DateTimeUtils.formatDate(date), [date]);

    const [cancel, {
        isSuccess,
        error,
    }] = useCancelBookingsMutation({});

    useEffect(() => {
        if (isSuccess) toastSuccess(Notice.CANCEL_BOOKINGS);
    }, [isSuccess, error]);

    const handleCancel = useCallback(() => {
        if (!scheduleId) return;
        cancel({ scheduleId });
    }, [cancel, scheduleId]);

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
                    <StyledSubtext>{seats} {seats > 1 ? 'seats' : 'seat'}</StyledSubtext>
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
                        >Cancel
                        </ButtonIcon>
                    )}
                </StyledDownWrapper>
            )}
        />
    );
};
