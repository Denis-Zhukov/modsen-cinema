import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Urls } from '@/shared/api/Urls';

export const api = createApi({
    tagTypes: [],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: Urls.BASE_URL,
        credentials: 'include',
    }),
    endpoints: () => ({}),
});
