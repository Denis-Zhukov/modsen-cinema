'use client';

import { BookingCard } from 'entities/bookings';
import { useTranslations } from 'next-intl';
import { useCallback } from 'react';
import { BookingsSection } from 'widgets/films/ui/BookingsSection';

import { StyledBookings } from '@/pages/Bookings/styled';
import { Urls } from '@/shared/config/constants/Urls';
import {
    useCancelBookingsMutation,
    useGetMyMissingBookingQuery,
    useGetMyUpcomingBookingQuery,
    useGetMyVisitedBookingQuery,
} from '@/shared/model/store/rtk/booking.rtk';

export const Bookings = () => {
    const t = useTranslations('bookings');

    const [cancel] = useCancelBookingsMutation({});
    const handleCancel = useCallback((id: number) => () => cancel({ scheduleId: id }), [cancel]);

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
