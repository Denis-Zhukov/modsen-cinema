import {
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Query,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiLimitOffset } from '../../decarators/api-limit-offset.decarator';
import { AuthorsEntity } from './authors.entity';
import { NotFound } from '../../utils/responses/not-found';

@ApiTags('Authors')
@Controller('authors')
export class AuthorsController {
    public constructor(private readonly service: AuthorsService) {}

    @ApiLimitOffset()
    @ApiResponse({ status: 200, type: [AuthorsEntity] })
    @Get()
    getAuthors(
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
        type: AuthorsEntity,
    })
    @Get(':id')
    async getAuthorById(@Param('id', ParseIntPipe) id: number) {
        const author = await this.service.getById(id);
        if (!author)
            throw new NotFoundException(`Author with id ${id} not found`);
        return author;
    }
}
