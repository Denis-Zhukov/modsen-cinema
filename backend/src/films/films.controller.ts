import {
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
} from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('films')
export class FilmsController {
    public constructor(private readonly service: FilmsService) {}

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
}
