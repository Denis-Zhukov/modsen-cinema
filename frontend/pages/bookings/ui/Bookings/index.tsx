'use client';

import { redirect } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect } from 'react';

import { MBookingCard } from '@/entities/bookings/ui/BookingCard';
import { StyledBookings } from '@/pages/bookings/ui/Bookings/styled';
import { Forms } from '@/shared/config/constants/Forms';
import { Notice } from '@/shared/config/constants/Notice';
import { Urls } from '@/shared/config/constants/Urls';
import { fade } from '@/shared/lib/animations';
import { useAppSelector } from '@/shared/lib/hooks/redux-hooks';
import { ErrorUtils } from '@/shared/lib/utils/ErrorUtils';
import { toastError, toastSuccess } from '@/shared/lib/utils/ToastUtils';
import {
    useCancelBookingsMutation,
    useGetMyMissingBookingQuery,
    useGetMyUpcomingBookingQuery,
    useGetMyVisitedBookingQuery,
} from '@/shared/model/store/rtk/booking.rtk';
import { selectAuth } from '@/shared/model/store/selectors/auth.selectors';
import { BookingsSection } from '@/widgets/films/ui/BookingsSection';

export const Bookings = () => {
    const t = useTranslations('bookings');

    const {
        isAuth,
        isSuccess,
        error: authError,
    } = useAppSelector(selectAuth);
    const [cancel, {
        error,
        isSuccess: cancelSuccess,
    }] = useCancelBookingsMutation({});
    const handleCancel = useCallback((id: number) => () => cancel({ scheduleId: id }), [cancel]);

    useEffect(() => {
        if (error && ErrorUtils.isTypedError(error)) {
            toastError(error.data.message);
        } else if (error) toastError(Notice.UNEXPECTED_ERROR);
        if (cancelSuccess) toastSuccess(Notice.CANCEL_BOOKINGS);
    }, [error, cancelSuccess]);

    useEffect(() => {
        if (!isAuth && (isSuccess || authError)) redirect(`/?form=${Forms.LOGIN}`);
    }, [authError, isAuth, isSuccess]);

    return (
        <StyledBookings>
            <BookingsSection title={t('upcoming')} useData={useGetMyUpcomingBookingQuery}>
                {({
                    scheduleId,
                    film,
                    dateAndTime,
                    count,
                    paid,
                    ticket,
                    rating,
                }, i) => (
                    <MBookingCard
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        custom={(i + 1)}
                        ticket={ticket}
                        onCancel={handleCancel(scheduleId)}
                        key={scheduleId}
                        title={film.name}
                        rating={rating}
                        preview={`${Urls.BASE_URL}/${film.preview}`}
                        date={dateAndTime}
                        seats={count}
                        paid={paid}
                    />
                )}
            </BookingsSection>
            <BookingsSection title={t('past')} useData={useGetMyVisitedBookingQuery}>
                {({
                    scheduleId,
                    film,
                    dateAndTime,
                    count,
                    paid,
                    ticket,
                    rating,
                }, i) => (
                    <MBookingCard
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        custom={(i + 1)}
                        ticket={ticket}
                        key={scheduleId}
                        title={film.name}
                        rating={rating}
                        preview={`${Urls.BASE_URL}/${film.preview}`}
                        date={dateAndTime}
                        seats={count}
                        paid={paid}
                    />
                )}
            </BookingsSection>
            <BookingsSection title={t('missing')} useData={useGetMyMissingBookingQuery}>
                {({
                    scheduleId,
                    film,
                    dateAndTime,
                    count,
                    paid,
                    ticket,
                    rating,
                }, i) => (
                    <MBookingCard
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        custom={(i + 1)}
                        ticket={ticket}
                        key={scheduleId}
                        title={film.name}
                        rating={rating}
                        preview={`${Urls.BASE_URL}/${film.preview}`}
                        date={dateAndTime}
                        seats={count}
                        paid={paid}
                    />
                )}
            </BookingsSection>
        </StyledBookings>
    );
};
