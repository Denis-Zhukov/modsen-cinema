import {
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
} from '@nestjs/common';
import { ActorsService } from './actors.service';

@Controller('actors')
export class ActorsController {
    public constructor(private readonly service: ActorsService) {}

    @Get()
    getActors() {
        return this.service.getAll();
    }

    @Get(':id')
    async getActorById(@Param('id', ParseIntPipe) id: number) {
        const actor = await this.service.getById(id);
        if (!actor)
            throw new NotFoundException(`Actor with id ${id} not found`);
        return actor;
    }
}
