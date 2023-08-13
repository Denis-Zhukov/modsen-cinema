import { Injectable } from '@nestjs/common';
import { paths } from '../../utils/constants';
import { resolve, extname } from 'path';
import { mkdir, writeFile } from 'fs/promises';
import slugify from 'slugify';

@Injectable()
export class FilesService {
    private async saveFilmData(
        film: string,
        file: Express.Multer.File,
        prefix: string,
    ): Promise<string> {
        const filmsPath = resolve(paths.filmsRoute, film);
        const fileName = `${prefix}${extname(file.originalname)}`;

        await mkdir(filmsPath, { recursive: true });
        const filePath = resolve(filmsPath, fileName);

        await writeFile(filePath, file.buffer);

        return `/static/films/${film}/${fileName}`;
    }

    async addPreview(film: string, preview: Express.Multer.File) {
        return this.saveFilmData(film, preview, 'preview');
    }

    async addTrailer(film: string, trailer: Express.Multer.File) {
        return this.saveFilmData(film, trailer, 'trailer');
    }

    async addTrailerAndPreview(
        film: string,
        preview: Express.Multer.File,
        trailer: Express.Multer.File,
    ) {
        const slugifiedFilm = slugify(film);
        const previewPath = await this.addPreview(slugifiedFilm, preview);
        const trailerPath = await this.addTrailer(slugifiedFilm, trailer);

        return {
            name: film,
            slug: slugifiedFilm,
            preview: previewPath,
            trailer: trailerPath,
        };
    }
}
