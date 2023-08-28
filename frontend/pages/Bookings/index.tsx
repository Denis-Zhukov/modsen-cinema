'use client';

import { useTranslations } from 'next-intl';

import { BookingCard } from '@/entities/ui/BookingCard';
import { StyledBookings } from '@/pages/Bookings/styled';
import { Urls } from '@/shared/config/constants/Urls';
import {
    useGetMyMissingBookingQuery,
    useGetMyUpcomingBookingQuery,
    useGetMyVisitedBookingQuery,
} from '@/shared/model/store/rtk/booking.rtk';
import { BookingsSection } from '@/widgets/ui/BookingsSection';

export const Bookings = () => {
    const t = useTranslations('bookings');

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
                        scheduleId={scheduleId}
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
