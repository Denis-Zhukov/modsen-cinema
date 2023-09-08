import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from './films.service';
import { FilmsEntity } from './films.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserReviewsService } from '../user-reviews/user-reviews.service';
import { ScheduleService } from '../schedule/schedule.service';
import { AddFilmDto } from './dto/add-film.dto';

describe('FilmsService', () => {
    let filmsService: FilmsService;

    const mockFilmsRepository = {
        findOne: jest.fn(),
        create: jest.fn(),
        save: jest.fn(),
        find: jest.fn(),
    };

    const mockUserReviewsService = {
        getByFilmId: jest.fn(),
    };

    const mockScheduleService = {
        getCurrentSchedule: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FilmsService,
                {
                    provide: getRepositoryToken(FilmsEntity),
                    useValue: mockFilmsRepository,
                },
                {
                    provide: UserReviewsService,
                    useValue: mockUserReviewsService,
                },
                {
                    provide: ScheduleService,
                    useValue: mockScheduleService,
                },
            ],
        }).compile();

        filmsService = module.get<FilmsService>(FilmsService);
    });

    it('should get film by id', async () => {
        const filmId = 1;
        const mockFilm = new FilmsEntity();
        mockFilm.id = filmId;
        mockFilm.name = 'Test Film';

        mockFilmsRepository.findOne.mockReturnValue(mockFilm);

        const result = await filmsService.getById(filmId);

        expect(result).toEqual(mockFilm);
        expect(mockFilmsRepository.findOne).toHaveBeenCalledWith({
            where: { id: filmId },
            relations: { author: true },
        });
    });

    it('should get film by slug', async () => {
        const slug = 'test-film';
        const mockFilm = new FilmsEntity();
        mockFilm.slug = slug;
        mockFilm.name = 'Test Film';

        mockFilmsRepository.findOne.mockReturnValue(mockFilm);
        mockUserReviewsService.getByFilmId.mockReturnValue([]);
        mockScheduleService.getCurrentSchedule.mockReturnValue([]);

        const result = await filmsService.getBySlug(slug);

        expect(result).toEqual({
            ...mockFilm,
            rating: 0,
            next: 'test-film',
            available: false,
            reviews: [],
        });

        expect(mockFilmsRepository.findOne).toHaveBeenCalledWith({
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

        expect(mockUserReviewsService.getByFilmId).toHaveBeenCalledWith(
            mockFilm.id,
            3,
        );

        expect(mockScheduleService.getCurrentSchedule).toHaveBeenCalled();
    });

    it('should add a film', async () => {
        const dto: AddFilmDto = {
            name: 'New Film',
            release: '2023-09-08',
            description: 'A new film description',
        };

        const slug = 'new-film';
        const preview = {
            endpoint: '/previews',
            path: '/previews/new-film.jpg',
        };
        const trailer = {
            endpoint: '/trailers',
            path: '/trailers/new-film.mp4',
        };

        const mockFilm = new FilmsEntity();
        mockFilm.name = dto.name;
        mockFilm.release = 2009;
        mockFilm.description = dto.description;
        mockFilm.previewPath = preview.path;
        mockFilm.preview = preview.endpoint;
        mockFilm.trailerPath = trailer.path;
        mockFilm.trailer = trailer.endpoint;
        mockFilm.slug = slug;

        mockFilmsRepository.create.mockReturnValue(mockFilm);
        mockFilmsRepository.save.mockReturnValue(mockFilm);

        const result = await filmsService.addFilm(dto, slug, preview, trailer);

        expect(result).toEqual(mockFilm);
        expect(mockFilmsRepository.create).toHaveBeenCalledWith({
            name: dto.name,
            release: +dto.release,
            description: dto.description,
            previewPath: preview.path,
            preview: preview.endpoint,
            trailerPath: trailer.path,
            trailer: trailer.endpoint,
            slug,
        });
        expect(mockFilmsRepository.save).toHaveBeenCalledWith(mockFilm);
    });

    it('should get unique films', () => {
        const films = [
            { id: 1, name: 'Film 1' },
            { id: 2, name: 'Film 2' },
            { id: 1, name: 'Film 1' },
        ] as FilmsEntity[];

        const result = filmsService.getUnique(films);

        expect(result).toEqual([
            { id: 1, name: 'Film 1' },
            { id: 2, name: 'Film 2' },
        ]);
    });
});
