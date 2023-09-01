import {
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Query,
} from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ActorsEntity } from './actors.entity';
import { ApiLimitOffset } from '../../decarators/api-limit-offset.decarator';
import { NotFound } from '../../utils/responses/not-found';

@ApiTags('Actors')
@Controller('actors')
export class ActorsController {
    public constructor(private readonly service: ActorsService) {}

    @ApiLimitOffset()
    @ApiResponse({
        status: 200,
        type: [ActorsEntity],
    })
    @Get()
    getActors(
        @Query('limit', new ParseIntPipe({ optional: true })) limit = 10,
        @Query('offset', new ParseIntPipe({ optional: true })) offset = 0,
    ) {
        return this.service.getAll(limit, offset);
    }

    @ApiResponse({
        status: 404,
        type: NotFound,
    })
    @ApiResponse({
        status: 200,
        type: ActorsEntity,
    })
    @Get(':id')
    async getActorById(@Param('id', ParseIntPipe) id: number) {
        const actor = await this.service.getById(id);
        if (!actor)
            throw new NotFoundException(`Actor with id ${id} not found`);
        return actor;
    }
}
