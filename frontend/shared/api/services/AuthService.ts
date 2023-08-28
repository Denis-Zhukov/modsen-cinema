import axios from 'axios';

import { Urls } from '@/shared/config/constants/Urls';
import { LoginRequest } from '@/shared/model/store/rtk/typing/requests/LoginRequest';
import { LoginResponse } from '@/shared/model/store/rtk/typing/responses/LoginResponse';

export class AuthService {
    static async login(data: LoginRequest, controller?: AbortController) {
        return axios.post<LoginResponse>(Urls.LOGIN, data, {
            signal: controller?.signal,
            withCredentials: true,
        });
    }

    static async refresh() {
        return axios.post(Urls.REFRESH, {}, { withCredentials: true });
    }

    static async logout() {
        return axios.post(Urls.LOGOUT, {}, { withCredentials: true });
    }
}
