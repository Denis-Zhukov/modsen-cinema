import { Endpoints } from '@/shared/constants/Endpoints';
import { api } from '@/shared/store/rtk/api';
import type {
    ScheduleByDayMonthRequest,
} from '@/shared/typing/api/requests/ScheduleByDayMonthRequest';
import type {
    ScheduleByDayMonthResponse,
} from '@/shared/typing/api/responses/ScheduleByDayMonthResponse';

const filmRtk = api.injectEndpoints({
    endpoints: (build) => ({
        getRelevantFilms: build.query({
            query: () => ({
                url: Endpoints.RELEVANT_FILMS,
                method: 'GET',
            }),
        }),
        getScheduleByMonthDay: build.query<ScheduleByDayMonthResponse, ScheduleByDayMonthRequest>({
            query: ({
                filmId,
                ...body
            }) => ({
                body,
                url: `${Endpoints.SCHEDULE}/${filmId}`,
                method: 'POST',
            }),
            providesTags: ['seats'],
        }),
    }),
});

export const {
    useGetRelevantFilmsQuery,
    useGetScheduleByMonthDayQuery,
} = filmRtk;
