import axios from 'axios';

import { axiosInstance } from '@/shared/api/instance';
import { Urls } from '@/shared/api/Urls';
import { LoginRequest } from '@/shared/typing/api/requests/LoginRequest';
import { LoginResponse } from '@/shared/typing/api/responses/LoginResponse';

export class AuthService {
    static async login(data: LoginRequest, controller?: AbortController) {
        return axiosInstance.post<LoginResponse>(Urls.LOGIN, data, { signal: controller?.signal });
    }

    static async refresh() {
        return axios.post(Urls.REFRESH, {}, { withCredentials: true });
    }

    static async logout() {
        return axios.post(Urls.LOGOUT, {}, { withCredentials: true });
    }
}
