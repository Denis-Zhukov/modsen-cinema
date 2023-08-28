import { Endpoints } from '@/shared/constants/Endpoints';
import { api } from '@/shared/store/rtk/api';
import { RegisterRequest } from '@/shared/typing/api/requests/RegisterRequest';
import { RegisterResponse } from '@/shared/typing/api/responses/RegisterResponse';

const authRtk = api.injectEndpoints({
    endpoints: (build) => ({
        register: build.mutation<RegisterResponse, RegisterRequest>({
            query: (data: RegisterRequest) => ({
                body: data,
                url: Endpoints.REGISTER,
                method: 'POST',
            }),
        }),
    }),
});

export const { useRegisterMutation } = authRtk;
