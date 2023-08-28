import { Endpoints } from '@/shared/constants/Endpoints';
import { api } from '@/shared/store/rtk/api';
import { SeatsByScheduleRequest } from '@/shared/typing/api/requests/SeatsByScheduleRequest';
import { SeatsByScheduleResponse } from '@/shared/typing/api/responses/SeatsByScheduleResponse';

const seatsRtk = api.injectEndpoints({
    endpoints: (build) => ({
        getSeatsBySchedule: build.query<SeatsByScheduleResponse, SeatsByScheduleRequest>({
            query: ({ scheduleId }) => ({
                url: `${Endpoints.SEATS}/${scheduleId}`,
                method: 'GET',
            }),
            providesTags: ['seats'],
            keepUnusedDataFor: 0,
        }),
    }),
});

export const { useGetSeatsByScheduleQuery } = seatsRtk;
