'use client';

import { BookingCard } from '@/entities/ui/BookingCard';
import { StyledBookings } from '@/pages/Bookings/styled';
import { Urls } from '@/shared/api/Urls';
import { useRedirectUnauth } from '@/shared/hooks/useRedirectUnauth';
import {
    useGetMyMissingBookingQuery,
    useGetMyUpcomingBookingQuery,
    useGetMyVisitedBookingQuery,
} from '@/shared/store/rtk/booking.rtk';
import { BookingsSection } from '@/widgets/ui/BookingsSection';

export const Bookings = () => {
    useRedirectUnauth();

    return (
        <StyledBookings>
            <BookingsSection title="Your upcoming bookings" useData={useGetMyUpcomingBookingQuery}>
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
            <BookingsSection title="Your past bookings" useData={useGetMyVisitedBookingQuery}>
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
            <BookingsSection title="Your missing bookings" useData={useGetMyMissingBookingQuery}>
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
