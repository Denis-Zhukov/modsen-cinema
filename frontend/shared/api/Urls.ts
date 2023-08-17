import { Endpoints } from '@/shared/api/Endpoints';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND;
const BASE_API_URL = `${process.env.NEXT_PUBLIC_BACKEND}/api`;

export const Urls = {
    BASE_URL,
    BASE_API_URL,
    MAIN_PREVIEW: `${BASE_URL}/${Endpoints.MAIN_PREVIEW}`,
    MAIN_TRAILER: `${BASE_URL}/${Endpoints.MAIN_TRAILER}`,
    LOGIN: `${BASE_API_URL}/${Endpoints.LOGIN}`,
    REFRESH: `${BASE_API_URL}/${Endpoints.REFRESH}`,
    LOGOUT: `${BASE_API_URL}/${Endpoints.LOGOUT}`,
};
