import { Endpoints } from '@/shared/constants/Endpoints';
import { api } from '@/shared/store/rtk/api';
import { BookRequest } from '@/shared/typing/api/requests/BookRequest';
import { CancelBookingsRequest } from '@/shared/typing/api/requests/CancelBookingsRequest';
import { BookResponse } from '@/shared/typing/api/responses/BookResponse';
import { CancelBookingsResponse } from '@/shared/typing/api/responses/CancelBookingsResponse';
import { GetMyBookingsResponse } from '@/shared/typing/api/responses/GetMyBookingsResponse';

const bookingRtk = api.injectEndpoints({
    endpoints: (build) => ({
        book: build.mutation<BookResponse, BookRequest>({
            query: (body) => ({
                body,
                url: Endpoints.BOOKINGS,
                method: 'POST',
            }),
            invalidatesTags: ['seats', 'bookings'],
        }),
        getMyUpcomingBooking: build.query<GetMyBookingsResponse, {}>({
            query: () => ({
                url: Endpoints.MY_UPCOMING_BOOKINGS,
                method: 'GET',
            }),
            providesTags: ['bookings'],
        }),
        getMyVisitedBooking: build.query<GetMyBookingsResponse, {}>({
            query: () => ({
                url: Endpoints.MY_VISITED_BOOKINGS,
                method: 'GET',
            }),
        }),
        getMyMissingBooking: build.query<GetMyBookingsResponse, {}>({
            query: () => ({
                url: Endpoints.MY_MISSING_BOOKINGS,
                method: 'GET',
            }),
        }),
        cancelBookings: build.mutation<CancelBookingsResponse, CancelBookingsRequest>({
            query: ({ scheduleId }) => ({
                url: `${Endpoints.CANCEL_BOOKINGS}/${scheduleId}`,
                method: 'GET',
            }),
            invalidatesTags: ['seats', 'bookings'],
        }),
    }),
});

export const {
    useBookMutation,
    useGetMyUpcomingBookingQuery,
    useGetMyMissingBookingQuery,
    useGetMyVisitedBookingQuery,
    useCancelBookingsMutation,
} = bookingRtk;
