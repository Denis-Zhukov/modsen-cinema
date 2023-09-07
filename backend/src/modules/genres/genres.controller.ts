import {
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
} from '@nestjs/common';
import { GenresService } from './genres.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GenresEntity } from './genres.entity';
import { NotFound } from '../../utils/responses/not-found';

@ApiTags('Genres')
@Controller('genres')
export class GenresController {
    public constructor(private readonly service: GenresService) {}

    @ApiResponse({ type: [GenresEntity] })
    @Get()
    getGenres() {
        return this.service.getAll();
    }

    @ApiResponse({ type: GenresEntity, status: 200 })
    @ApiResponse({ type: NotFound, status: 404 })
    @Get(':id')
    async getGenreById(@Param('id', ParseIntPipe) id: number) {
        const genre = await this.service.getById(id);
        if (!genre)
            throw new NotFoundException(`Genre with id ${id} not found`);
        return genre;
    }
}
