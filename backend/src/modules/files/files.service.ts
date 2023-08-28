import { Injectable } from '@nestjs/common';
import { paths } from '../../utils/constants';
import { resolve, extname } from 'path';
import { mkdir, writeFile, readFile } from 'fs/promises';
import slugify from 'slugify';
import { nanoid } from 'nanoid';

@Injectable()
export class FilesService {
    private async saveFilmData(
        film: string,
        file: Express.Multer.File,
        prefix: string,
    ) {
        const filmsPath = resolve(paths.filmsRoute, film);
        const fileName = `${prefix}${extname(file.originalname)}`;

        await mkdir(filmsPath, { recursive: true });
        const filePath = resolve(filmsPath, fileName);

        await writeFile(filePath, file.buffer);

        return {
            endpoint: `static/films/${film}/${fileName}`,
            path: filePath,
        };
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
        const slugifiedFilm = `${slugify(film, { lower: true })}-${nanoid(10)}`;
        const previewPath = await this.addPreview(slugifiedFilm, preview);
        const trailerPath = await this.addTrailer(slugifiedFilm, trailer);

        return {
            name: film,
            slug: slugifiedFilm,
            preview: previewPath,
            trailer: trailerPath,
        };
    }

    async setAsMain(id: number) {
        await writeFile(
            './public/films/main-info.json',
            JSON.stringify({ id }),
        );
    }

    async getMainFilmId() {
        const result = await readFile('./public/films/main-info.json', {
            encoding: 'utf-8',
        });
        return JSON.parse(result).id;
    }

    public async setAvatar(avatar: Express.Multer.File, userId: number) {
        const fileName = `${userId}${extname(avatar.originalname)}`;

        await mkdir(paths.avatarsRoute, { recursive: true });
        const filePath = resolve(paths.avatarsRoute, fileName);

        await writeFile(filePath, avatar.buffer);

        return {
            endpoint: `static/avatars/${fileName}`,
            path: filePath,
        };
    }
}
