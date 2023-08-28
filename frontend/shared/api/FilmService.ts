import axios from 'axios';

import { Urls } from '@/shared/api/Urls';
import { FilmResponse } from '@/shared/typing/api/responses/FilmResponse';

export class FilmService {
    static async GetMainFilm() {
        return axios.get(Urls.MAIN_FILM);
    }

    static async getFilm(slug: string) {
        return axios.get<FilmResponse>(Urls.filmUrlBySlug(slug));
    }
}
