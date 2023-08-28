import { Endpoints } from '@/shared/constants/Endpoints';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND;
const BASE_API_URL = `${process.env.NEXT_PUBLIC_BACKEND}/api`;

export const Urls = {
    BASE_URL,
    BASE_API_URL,
    MAIN_PREVIEW: `${BASE_URL}/${Endpoints.MAIN_PREVIEW}`,
    MAIN_TRAILER: `${BASE_URL}/${Endpoints.MAIN_TRAILER}`,
    MAIN_FILM: `${BASE_API_URL}/${Endpoints.MAIN_FILM}`,
    LOGIN: `${BASE_API_URL}/${Endpoints.LOGIN}`,
    REFRESH: `${BASE_API_URL}/${Endpoints.REFRESH}`,
    LOGOUT: `${BASE_API_URL}/${Endpoints.LOGOUT}`,
    BOOK: `${BASE_API_URL}/${Endpoints.BOOKINGS}`,
    VERIFY_TOKEN: `${BASE_API_URL}/${Endpoints.VERIFY}`,
    filmUrlBySlug: (slug: string) => `${BASE_API_URL}/films/${slug}`,
    daysUrlByFilmId: (id: number) => `${BASE_API_URL}/schedule/days/${id}`,
};
