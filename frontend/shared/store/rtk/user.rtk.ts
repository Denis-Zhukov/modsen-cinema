import { Endpoints } from '@/shared/constants/Endpoints';
import { api } from '@/shared/store/rtk/api';

const seatsRtk = api.injectEndpoints({
    endpoints: (build) => ({
        updateProfile: build.mutation({
            query: (body) => ({
                body,
                url: Endpoints.UPDATE_PROFILE,
                method: 'POST',
            }),
        }),
    }),
});

export const { useUpdateProfileMutation } = seatsRtk;
