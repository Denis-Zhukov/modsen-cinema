import axios from 'axios';

import { Urls } from '@/shared/api/Urls';
import { getAccessToken, setAccessToken } from '@/shared/lib/local-storage-utils';

export const axiosInstance = axios.create({
    baseURL: Urls.BASE_API_URL,
    withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
    return config;
});

axiosInstance.interceptors.response.use((config) => config, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config.isRetry) {
        originalRequest.isRetry = true;
        const { data } = await axios.post<{ access: string }>(Urls.REFRESH, {}, { withCredentials: true });
        setAccessToken(data.access);
        return axiosInstance.request(originalRequest);
    }
    throw error;
});
