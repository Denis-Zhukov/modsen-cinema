import axios from 'axios';

import { Urls } from '@/shared/config/constants/Urls';
import { FilmResponse } from '@/shared/model/store/rtk/typing/responses/FilmResponse';

export class FilmService {
    static async getMainFilm() {
        return axios.get(Urls.MAIN_FILM);
    }

    static async getFilm(slug: string) {
        return axios.get<FilmResponse>(Urls.filmUrlBySlug(slug));
    }

    static async getRelevantFilms() {
        return axios.get(Urls.RELEVANT_FILMS);
    }
}
