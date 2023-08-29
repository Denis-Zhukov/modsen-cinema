import { BackendEndpoints } from '@/shared/config/constants/BackendEndpoints';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND;
const BASE_API_URL = process.env.NEXT_PUBLIC_BACKEND_API;

export const Urls = {
    BASE_URL,
    BASE_API_URL,
    MAIN_PREVIEW: `${BASE_URL}/${BackendEndpoints.MAIN_PREVIEW}`,
    MAIN_TRAILER: `${BASE_URL}/${BackendEndpoints.MAIN_TRAILER}`,
    MAIN_FILM: `${BASE_API_URL}/${BackendEndpoints.MAIN_FILM}`,
    LOGIN: `${BASE_API_URL}/${BackendEndpoints.LOGIN}`,
    LOGIN_GOOGLE: `${BASE_API_URL}/${BackendEndpoints.LOGIN_GOOGLE}`,
    LOGIN_FACEBOOK: `${BASE_API_URL}/${BackendEndpoints.LOGIN_FACEBOOK}`,
    LOGIN_GITHUB: `${BASE_API_URL}/${BackendEndpoints.LOGIN_GITHUB}`,
    REFRESH: `${BASE_API_URL}/${BackendEndpoints.REFRESH}`,
    LOGOUT: `${BASE_API_URL}/${BackendEndpoints.LOGOUT}`,
    BOOK: `${BASE_API_URL}/${BackendEndpoints.BOOKINGS}`,
    RELEVANT_FILMS: `${BASE_API_URL}/${BackendEndpoints.RELEVANT_FILMS}`,
    VERIFY_TOKEN: `${BASE_API_URL}/${BackendEndpoints.VERIFY}`,
    filmUrlBySlug: (slug: string) => `${BASE_API_URL}/${BackendEndpoints.FILMS}/${slug}`,
};
