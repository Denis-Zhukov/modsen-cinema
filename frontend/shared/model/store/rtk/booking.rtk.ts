import { BackendEndpoints } from '@/shared/config/constants/BackendEndpoints';
import { api } from '@/shared/model/store/rtk/api';
import { BookRequest } from '@/shared/model/store/rtk/typing/requests/BookRequest';
import { CancelBookingsRequest } from '@/shared/model/store/rtk/typing/requests/CancelBookingsRequest';
import { BookResponse } from '@/shared/model/store/rtk/typing/responses/BookResponse';
import { CancelBookingsResponse } from '@/shared/model/store/rtk/typing/responses/CancelBookingsResponse';
import { GetMyBookingsResponse } from '@/shared/model/store/rtk/typing/responses/GetMyBookingsResponse';

const bookingRtk = api.injectEndpoints({
    endpoints: (build) => ({
        book: build.mutation<BookResponse, BookRequest>({
            query: (body) => ({
                body,
                url: BackendEndpoints.BOOKINGS,
                method: 'POST',
            }),
            invalidatesTags: ['seats', 'bookings'],
        }),
        getMyUpcomingBooking: build.query<GetMyBookingsResponse, {}>({
            query: () => ({
                url: BackendEndpoints.MY_UPCOMING_BOOKINGS,
                method: 'GET',
            }),
            providesTags: ['bookings'],
        }),
        getMyVisitedBooking: build.query<GetMyBookingsResponse, {}>({
            query: () => ({
                url: BackendEndpoints.MY_VISITED_BOOKINGS,
                method: 'GET',
            }),
        }),
        getMyMissingBooking: build.query<GetMyBookingsResponse, {}>({
            query: () => ({
                url: BackendEndpoints.MY_MISSING_BOOKINGS,
                method: 'GET',
            }),
        }),
        cancelBookings: build.mutation<CancelBookingsResponse, CancelBookingsRequest>({
            query: ({ scheduleId }) => ({
                url: `${BackendEndpoints.CANCEL_BOOKINGS}/${scheduleId}`,
                method: 'DELETE',
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
