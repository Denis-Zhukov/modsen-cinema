import axios from 'axios';

import { Urls } from '@/shared/config/constants/Urls';
import { LocaleStorageUtils } from '@/shared/lib/utils/LocaleStorageUtils';

export const axiosInstance = axios.create({
    baseURL: Urls.BASE_API_URL,
    withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${LocaleStorageUtils.getAccessToken()}`;
    return config;
});

axiosInstance.interceptors.response.use((config) => config, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config.isRetry) {
        originalRequest.isRetry = true;
        const { data } = await axios.post<{ access: string }>(Urls.REFRESH, {}, { withCredentials: true });
        LocaleStorageUtils.setAccessToken(data.access);
        return axiosInstance.request(originalRequest);
    }
    throw error;
});
