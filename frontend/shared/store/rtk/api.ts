import type { BaseQueryApi, BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Urls } from '@/shared/api/Urls';
import { Storage } from '@/shared/lib/local-storage-utils';
import { refreshAuthThunk } from '@/shared/store/slices/auth/refreshAuthThunk';

const customBaseQuery: BaseQueryFn = async (args, api: BaseQueryApi, extraOptions) => {
    const query = fetchBaseQuery({
        baseUrl: Urls.BASE_API_URL,
        credentials: 'include',
        prepareHeaders: ((headers) => {
            headers.set('Authorization', `Bearer ${Storage.getAccessToken()}`);
            return headers;
        }),
    });

    let result = await query(args, api, extraOptions);

    if (result.error?.status === 401) {
        await api.dispatch(refreshAuthThunk);
        result = await query(args, api, extraOptions);
    }

    return result;
};

export const api = createApi({
    tagTypes: ['seats', 'bookings'],
    reducerPath: 'api',
    baseQuery: customBaseQuery,
    endpoints: () => ({}),
});
