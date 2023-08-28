import { BackendEndpoints } from '@/shared/config/constants/BackendEndpoints';
import { api } from '@/shared/model/store/rtk/api';
import { SubscribeRequest } from '@/shared/model/store/rtk/typing/requests/SubscribeRequest';

const subscribeRtk = api.injectEndpoints({
    endpoints: (build) => ({
        subscribe: build.mutation<{}, SubscribeRequest>({
            query: (body) => ({
                body,
                url: `${BackendEndpoints.SUBSCRIBE}`,
                method: 'POST',
            }),
        }),
    }),
});

export const { useSubscribeMutation } = subscribeRtk;
