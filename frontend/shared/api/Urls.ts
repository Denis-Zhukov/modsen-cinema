import { Endpoints } from '@/shared/api/Endpoints';

export const Urls = {
    BASE_URL: `${process.env.NEXT_PUBLIC_BACKEND}/api`,
    getMainTrailer: () => `${process.env.NEXT_PUBLIC_BACKEND}/${Endpoints.MAIN_TRAILER}`,
};
