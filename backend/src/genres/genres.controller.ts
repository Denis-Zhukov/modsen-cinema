import {
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
} from '@nestjs/common';
import { GenresService } from './genres.service';

@Controller('genres')
export class GenresController {
    public constructor(private readonly service: GenresService) {}

    @Get()
    getGenres() {
        return this.service.getAll();
    }

    @Get(':id')
    async getGenreById(@Param('id', ParseIntPipe) id: number) {
        const genre = await this.service.getById(id);
        if (!genre)
            throw new NotFoundException(`Genre with id ${id} not found`);
        return genre;
    }
}
