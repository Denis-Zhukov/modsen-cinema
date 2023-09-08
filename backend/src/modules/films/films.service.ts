import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { FilmsEntity } from './films.entity';
import { AddFilmDto } from './dto/add-film.dto';
import { UserReviewsService } from '../user-reviews/user-reviews.service';
import { ScheduleService } from '../schedule/schedule.service';

@Injectable()
export class FilmsService {
    public constructor(
        @InjectRepository(FilmsEntity)
        private readonly repository: Repository<FilmsEntity>,
        private readonly reviewService: UserReviewsService,
        private readonly scheduleService: ScheduleService,
    ) {}

    getById(id: number) {
        return this.repository.findOne({
            where: { id },
            relations: { author: true },
        });
    }

    async getBySlug(slug: string) {
        const { ratings, ...film } = await this.repository.findOne({
            where: { slug },
            relations: [
                'author',
                'country',
                'ratings',
                'reviews',
                'genres',
                'actors',
                'reviews',
            ],
        });

        const schedules = await this.scheduleService.getCurrentSchedule();
        const available = schedules.some(
            (schedule) => schedule.filmId === film.id,
        );

        film.reviews = await this.reviewService.getByFilmId(film.id, 3);

        let nextFilm = await this.repository.findOne({
            where: { id: MoreThan(film.id) },
            select: { slug: true },
        });

        if (!nextFilm)
            nextFilm = (
                await this.repository.find({ take: 1, select: { slug: true } })
            )?.[0];

        return {
            ...film,
            rating: ratings?.reduce((acc, { rate }) => acc + rate, 0) ?? 0,
            next: nextFilm.slug,
            available,
        };
    }

    async addFilm(
        dto: AddFilmDto,
        slug: string,
        preview: { endpoint: string; path: string },
        trailer: { endpoint: string; path: string },
    ) {
        const film = this.repository.create({
            name: dto.name,
            release: +dto.release,
            description: dto.description,
            previewPath: preview.path,
            preview: preview.endpoint,
            trailerPath: trailer.path,
            trailer: trailer.endpoint,
            slug,
        });

        return await this.repository.save(film);
    }

    getUnique(films: FilmsEntity[]) {
        const uniqueObjectsById = films.reduce((acc, obj) => {
            acc[obj.id] = obj;
            return acc;
        }, {});

        return Object.values(uniqueObjectsById);
    }
}
