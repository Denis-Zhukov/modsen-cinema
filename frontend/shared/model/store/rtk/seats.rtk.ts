import { BackendEndpoints } from '@/shared/config/constants/BackendEndpoints';
import { api } from '@/shared/model/store/rtk/api';
import { SeatsByScheduleRequest } from '@/shared/model/store/rtk/typing/requests/SeatsByScheduleRequest';
import { SeatsByScheduleResponse } from '@/shared/model/store/rtk/typing/responses/SeatsByScheduleResponse';

const seatsRtk = api.injectEndpoints({
    endpoints: (build) => ({
        getSeatsBySchedule: build.query<SeatsByScheduleResponse, SeatsByScheduleRequest>({
            query: ({ scheduleId }) => ({
                url: `${BackendEndpoints.SEATS}/${scheduleId}`,
                method: 'GET',
            }),
            providesTags: ['seats'],
            keepUnusedDataFor: 0,
        }),
    }),
});

export const { useGetSeatsByScheduleQuery } = seatsRtk;
