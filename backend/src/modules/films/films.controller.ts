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
import { fileFilter } from './utils/file-filter';
import { FilesService } from '../files/files.service';
import { UserErrors } from '../../utils/user-errors';

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
            preview?: Express.Multer.File[];
            trailer?: Express.Multer.File[];
        },
    ) {
        const previewFile = files.preview?.[0];
        const trailerFile = files.trailer?.[0];

        if (!previewFile || !trailerFile)
            throw new BadRequestException(UserErrors.NO_REQUIRED_FILES);

        const { slug, preview, trailer } =
            await this.filesService.addTrailerAndPreview(
                dto.name,
                previewFile,
                trailerFile,
            );

        return await this.service.addFilm(dto, slug, preview, trailer);
    }
}
