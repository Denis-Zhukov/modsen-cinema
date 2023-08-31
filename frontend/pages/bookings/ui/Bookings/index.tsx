'use client';

import { redirect } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useCallback } from 'react';

import { BookingCard } from '@/entities/bookings';
import { StyledBookings } from '@/pages/bookings/ui/Bookings/styled';
import { Forms } from '@/shared/config/constants/Forms';
import { Urls } from '@/shared/config/constants/Urls';
import { useAppSelector } from '@/shared/lib/hooks/redux-hooks';
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
        error,
    } = useAppSelector(selectAuth);
    const [cancel] = useCancelBookingsMutation({});
    const handleCancel = useCallback((id: number) => () => cancel({ scheduleId: id }), [cancel]);
    if (!isAuth && (isSuccess || error)) return redirect(`/?form=${Forms.LOGIN}`);

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
                }) => (
                    <BookingCard
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
                }) => (
                    <BookingCard
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
                }) => (
                    <BookingCard
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
