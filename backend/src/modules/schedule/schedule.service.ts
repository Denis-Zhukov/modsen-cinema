import { Injectable } from '@nestjs/common';
import { ScheduleEntity } from './schedule.entity';
import { And, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AddFilmDto } from './dto/add-film.dto';
import { GetTimesByDayMonthDto } from './dto/get-times-by-day-month.dto';

@Injectable()
export class ScheduleService {
    public constructor(
        @InjectRepository(ScheduleEntity)
        private readonly scheduleRepository: Repository<ScheduleEntity>,
    ) {}

    async getById(id: number) {
        return await this.scheduleRepository.findOne({
            where: { id },
        });
    }

    async getCurrentSchedule() {
        return await this.scheduleRepository.find({
            where: {
                dateAndTime: MoreThanOrEqual(new Date()),
            },
            relations: ['film'],
        });
    }

    async addFilm({ price, filmId, dateAndTime }: AddFilmDto) {
        const filmSchedule = this.scheduleRepository.create({
            dateAndTime,
            price,
            filmId,
        });
        return await this.scheduleRepository.save(filmSchedule);
    }

    private isToday(dateToCheck: Date) {
        const today = new Date();

        return (
            dateToCheck.getDate() === today.getDate() &&
            dateToCheck.getMonth() === today.getMonth() &&
            dateToCheck.getFullYear() === today.getFullYear()
        );
    }

    async getFilmTimesByDay(
        filmId: number,
        { day, month }: GetTimesByDayMonthDto,
    ) {
        const startOfDay = new Date();
        startOfDay.setDate(day);
        startOfDay.setMonth(month - 1);

        if (!this.isToday(startOfDay)) startOfDay.setUTCHours(0, 0, 0, 0);

        const endOfDay = new Date();
        endOfDay.setDate(day);
        endOfDay.setMonth(month - 1);
        endOfDay.setUTCHours(23, 59, 59, 999);

        return await this.scheduleRepository.find({
            where: {
                dateAndTime: And(
                    MoreThanOrEqual(startOfDay),
                    LessThanOrEqual(endOfDay),
                ),
                filmId,
            },
        });
    }
}
