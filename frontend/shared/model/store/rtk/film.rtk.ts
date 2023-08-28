import { BackendEndpoints } from '@/shared/config/constants/BackendEndpoints';
import { api } from '@/shared/model/store/rtk/api';
import type {
    ScheduleByDayMonthRequest,
} from '@/shared/model/store/rtk/typing/requests/ScheduleByDayMonthRequest';
import type {
    ScheduleByDayMonthResponse,
} from '@/shared/model/store/rtk/typing/responses/ScheduleByDayMonthResponse';

const filmRtk = api.injectEndpoints({
    endpoints: (build) => ({
        getScheduleByMonthDay: build.query<ScheduleByDayMonthResponse, ScheduleByDayMonthRequest>({
            query: ({
                filmId,
                ...body
            }) => ({
                body,
                url: `${BackendEndpoints.SCHEDULE}/${filmId}`,
                method: 'POST',
            }),
            providesTags: ['seats'],
        }),
    }),
});

export const { useGetScheduleByMonthDayQuery } = filmRtk;
