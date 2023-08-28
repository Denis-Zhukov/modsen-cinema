import { BackendEndpoints } from '@/shared/config/constants/BackendEndpoints';
import { api } from '@/shared/model/store/rtk/api';
import { RegisterRequest } from '@/shared/model/store/rtk/typing/requests/RegisterRequest';
import { RegisterResponse } from '@/shared/model/store/rtk/typing/responses/RegisterResponse';

const authRtk = api.injectEndpoints({
    endpoints: (build) => ({
        register: build.mutation<RegisterResponse, RegisterRequest>({
            query: (data: RegisterRequest) => ({
                body: data,
                url: BackendEndpoints.REGISTER,
                method: 'POST',
            }),
        }),
    }),
});

export const { useRegisterMutation } = authRtk;
