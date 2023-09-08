import {
    BadRequestException,
    Body,
    Controller,
    Get,
    NotFoundException,
    Param,
    Post,
    Put,
    UploadedFiles,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { FilmsService } from './films.service';
import { AddFilmDto } from './dto/add-film.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { fileFilter } from './utils/file-filter';
import { FilesService } from '../files/files.service';
import { UserErrors } from '../../utils/user-errors';
import { SetMainFilmDto } from './dto/set-main-film.dto';
import { ScheduleService } from '../schedule/schedule.service';
import { RestrictRoles } from '../../decarators/roles.decarator';
import { Roles } from '../../utils/init-values/roles';
import { JwtAuthGuard } from '../../guards/jwt.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddFilm } from './swagger/add-film';
import { FilmsEntity } from './films.entity';
import { AddFilmError } from './swagger/add-film-error';
import { NotFound } from '../../utils/responses/not-found';
import { GetMainError } from './swagger/get-main-error';

@ApiTags('Films')
@Controller('films')
export class FilmsController {
    public constructor(
        private readonly service: FilmsService,
        private readonly filesService: FilesService,
        private readonly scheduleService: ScheduleService,
    ) {}

    @ApiBody({
        type: AddFilm,
        description: 'This is FormData. It is important',
    })
    @ApiResponse({ type: FilmsEntity, status: 201 })
    @ApiResponse({ type: AddFilmError, status: 400 })
    @ApiBearerAuth('auth')
    @RestrictRoles(Roles.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
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

    @ApiResponse({ status: 200, description: 'Body is missing' })
    @ApiResponse({ type: NotFound, status: 400 })
    @ApiBearerAuth('auth')
    @RestrictRoles(Roles.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Put('set-main')
    async setMainFilm(@Body() { id }: SetMainFilmDto) {
        const film = await this.service.getById(id);
        if (!film) throw new BadRequestException('No such id');
        await this.filesService.setAsMain(id);
    }

    @ApiResponse({ type: FilmsEntity, status: 200 })
    @ApiResponse({ type: null, status: 200, description: 'Main movie not set' })
    @ApiResponse({ type: NotFound, status: 404 })
    @ApiResponse({ type: GetMainError, status: 418 })
    @Get('get-main')
    async getMainFilm() {
        let id: number;
        try {
            id = await this.filesService.getMainFilmId();
        } catch (e) {
            return null;
        }
        const film = this.service.getById(id);
        if (!film) throw new NotFoundException(`No such main film`);
        return film;
    }

    @ApiResponse({ type: [FilmsEntity] })
    @Get('relevant')
    async getRelevantFilms() {
        const schedule = await this.scheduleService.getCurrentSchedule();
        return this.service.getUnique(schedule.map(({ film }) => film));
    }

    @ApiResponse({ type: FilmsEntity, status: 200 })
    @ApiResponse({ type: NotFound, status: 404 })
    @Get(':slug')
    async getFilmBySlug(@Param('slug') slug: string) {
        const film = await this.service.getBySlug(slug);
        if (!film)
            throw new NotFoundException(`Film with slug '${slug}' not found`);
        return film;
    }
}
