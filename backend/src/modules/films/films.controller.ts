import {
    BadRequestException,
    Body,
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common';
import { FilmsService } from './films.service';
import { AddFilmDto } from './dto/add-film.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { mimeTypesImages, mimeTypesVideos } from './constants/mime-types';
import { fileFilter } from './utils/file-filter';
import { FilesService } from '../files/files.service';

@Controller('films')
export class FilmsController {
    public constructor(
        private readonly service: FilmsService,
        private readonly filesService: FilesService,
    ) {}

    @Get()
    getFilms() {
        return this.service.getAll();
    }

    @Get(':id')
    async getFilmById(@Param('id', ParseIntPipe) id: number) {
        const film = await this.service.getById(id);
        if (!film) throw new NotFoundException(`Film with id ${id} not found`);
        return film;
    }

    @Post('add')
    @UseInterceptors(
        FileFieldsInterceptor(
            [
                { name: 'trailer', maxCount: 1 },
                { name: 'preview', maxCount: 1 },
            ],
            {
                fileFilter,
            },
        ),
    )
    async addFilm(
        @Body() dto: AddFilmDto,
        @UploadedFiles()
        files: {
            trailer?: Express.Multer.File[];
            preview?: Express.Multer.File[];
        },
    ) {
        console.log(dto, files.preview, files.trailer);

        const { slug, preview, trailer } =
            await this.filesService.addTrailerAndPreview(
                dto.name,
                files.preview[0],
                files.trailer[0],
            );

        return await this.service.addFilm(dto, slug, preview, trailer);
    }
}
