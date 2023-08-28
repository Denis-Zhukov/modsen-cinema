import axios from 'axios';

import { Urls } from '@/shared/api/Urls';

export class ScheduleService {
    static async getCurrentDaysByFilmId(filmId: number) {
        return axios.get(Urls.daysUrlByFilmId(filmId));
    }
}
