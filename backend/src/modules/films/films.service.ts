import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilmsEntity } from './films.entity';
import { AddFilmDto } from './dto/add-film.dto';
import { UserReviewsService } from '../user-reviews/user-reviews.service';

@Injectable()
export class FilmsService {
    public constructor(
        @InjectRepository(FilmsEntity)
        private readonly repository: Repository<FilmsEntity>,
        private readonly reviewService: UserReviewsService,
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
        film.reviews = await this.reviewService.getByFilmId(film.id, 3);

        return {
            ...film,
            rating: ratings.reduce((acc, { rate }) => acc + rate, 0),
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
