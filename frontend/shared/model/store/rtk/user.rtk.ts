import { BackendEndpoints } from '@/shared/config/constants/BackendEndpoints';
import { api } from '@/shared/model/store/rtk/api';

const seatsRtk = api.injectEndpoints({
    endpoints: (build) => ({
        updateProfile: build.mutation({
            query: (body) => ({
                body,
                url: BackendEndpoints.UPDATE_PROFILE,
                method: 'POST',
            }),
        }),
    }),
});

export const { useUpdateProfileMutation } = seatsRtk;
