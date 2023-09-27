import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingsEntity } from './bookings.entity';
import { Repository } from 'typeorm';
import { ScheduleService } from '../schedule/schedule.service';
import { UserErrors } from '../../utils/user-errors';
import { calculateFilmRating } from '../../utils/calculate/calculate-film-rating';

@Injectable()
export class BookingsService {
    public constructor(
        @InjectRepository(BookingsEntity)
        private readonly bookingsRepository: Repository<BookingsEntity>,
        private readonly scheduleServices: ScheduleService,
    ) {}

    private groupBookings(bookings: BookingsEntity[]) {
        const groupedByScheduleId = {};

        bookings.forEach(({ scheduleId, ...booking }) => {
            if (!groupedByScheduleId[scheduleId]) {
                groupedByScheduleId[scheduleId] = [];
            }

            groupedByScheduleId[scheduleId].push(booking);
        });

        const result = [];

        for (const scheduleId in groupedByScheduleId) {
            const ticket =
                'U' +
                groupedByScheduleId[scheduleId][0].userId +
                'C' +
                groupedByScheduleId[scheduleId].length +
                'S' +
                groupedByScheduleId[scheduleId][0].schedule.id;
            const film = groupedByScheduleId[scheduleId][0].schedule.film;

            const rating = calculateFilmRating(film.ratings);

            result.push({
                ticket,
                scheduleId: groupedByScheduleId[scheduleId][0].schedule.id,
                dateAndTime:
                    groupedByScheduleId[scheduleId][0].schedule.dateAndTime,
                film,
                rating,
                count: groupedByScheduleId[scheduleId].length,
                seats: groupedByScheduleId[scheduleId].map(
                    ({ seat: { rowNumber, seatNumber } }) => {
                        return { rowNumber, seatNumber };
                    },
                ),
                paid:
                    groupedByScheduleId[scheduleId][0].paid *
                    groupedByScheduleId[scheduleId].length,
            });
        }

        return result;
    }

    public calculatePriceWithSale(price: number, scheduleDate: Date): number {
        const now = new Date();
        now.setHours(0, 0, 0, 0);

        const timeDiff = Math.abs(scheduleDate.getTime() - now.getTime());
        const oneDay = 1000 * 60 * 60 * 24;
        const diffDays = Math.floor(timeDiff / oneDay);
        const discount = 0.05;

        return Math.round((price - diffDays * (discount * price)) * 100) / 100;
    }

    getByScheduleId(scheduleId: number) {
        return this.bookingsRepository.find({
            where: { scheduleId },
        });
    }

    async book(userId: number, scheduleId: number, seatsId: number[]) {
        const schedule = await this.scheduleServices.getById(scheduleId);

        if (!schedule) throw new BadRequestException(UserErrors.WRONG_SCHEDULE);

        const values = seatsId.map((id) => ({
            userId,
            scheduleId,
            seatId: id,
            paid:
                '' +
                this.calculatePriceWithSale(
                    schedule.price,
                    new Date(schedule.dateAndTime),
                ),
        }));

        return this.bookingsRepository.insert(values);
    }

    async getUpcomingBookings(userId: number) {
        const bookings = await BookingsEntity.getUpcomingBookings(
            userId,
            this.bookingsRepository,
        );
        return this.groupBookings(bookings);
    }

    async getVisitedBookings(userId: number) {
        const bookings = await BookingsEntity.getVisitedBookings(
            userId,
            this.bookingsRepository,
        );
        return this.groupBookings(bookings);
    }

    async getMissingBookings(userId: number) {
        const bookings = await BookingsEntity.getMissingBookings(
            userId,
            this.bookingsRepository,
        );

        return this.groupBookings(
            bookings.filter(({ visits }) => visits.length === 0),
        );
    }

    async cancelBookings(userId: number, scheduleId: number) {
        const bookings = await this.bookingsRepository.find({
            where: { scheduleId, userId },
        });

        if (bookings.length === 0)
            throw new BadRequestException(UserErrors.NO_BOOKINGS);

        return this.bookingsRepository.remove(bookings);
    }
}
