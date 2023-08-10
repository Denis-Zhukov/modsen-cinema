import { Endpoints } from '@/shared/api/Endpoints';

export const Urls = {
    getMainTrailer: () => `${process.env.NEXT_PUBLIC_BACKEND}/${Endpoints.MAIN_TRAILER}`,
};
