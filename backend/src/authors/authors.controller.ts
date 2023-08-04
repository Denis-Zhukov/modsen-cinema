import {
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
    public constructor(private readonly service: AuthorsService) {}

    @Get()
    getAuthors() {
        return this.service.getAll();
    }

    @Get(':id')
    async getAuthorById(@Param('id', ParseIntPipe) id: number) {
        const author = await this.service.getById(id);
        if (!author)
            throw new NotFoundException(`Author with id ${id} not found`);
        return author;
    }
}
