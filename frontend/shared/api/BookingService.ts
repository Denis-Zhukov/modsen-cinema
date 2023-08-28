import { axiosInstance } from '@/shared/api/instance';
import { Urls } from '@/shared/api/Urls';

export class BookingService {
    static async book(scheduleId: number, seatIds: number[]) {
        return axiosInstance.post(Urls.BOOK, { scheduleId, seatIds });
    }
}
