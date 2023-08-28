import { Endpoints } from '@/shared/constants/Endpoints';
import { api } from '@/shared/store/rtk/api';
import { SubscribeRequest } from '@/shared/typing/api/requests/SubscribeRequest';

const subscribeRtk = api.injectEndpoints({
    endpoints: (build) => ({
        subscribe: build.mutation<{}, SubscribeRequest>({
            query: (body) => ({
                body,
                url: `${Endpoints.SUBSCRIBE}`,
                method: 'POST',
            }),
        }),
    }),
});

export const { useSubscribeMutation } = subscribeRtk;
