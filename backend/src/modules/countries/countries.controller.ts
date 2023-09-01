import {
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Query,
} from '@nestjs/common';
import { CountriesService } from './countries.service';
import { ApiLimitOffset } from '../../decarators/api-limit-offset.decarator';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CountriesEntity } from './countries.entity';
import { NotFound } from '../../utils/responses/not-found';

@ApiTags('Countries')
@Controller('countries')
export class CountriesController {
    public constructor(private readonly service: CountriesService) {}

    @ApiLimitOffset()
    @ApiResponse({ status: 200, type: CountriesEntity })
    @Get()
    getCountries(
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
        type: CountriesEntity,
    })
    @Get(':id')
    async getCountryById(@Param('id', ParseIntPipe) id: number) {
        const country = await this.service.getById(id);
        if (!country)
            throw new NotFoundException(`Country with id ${id} not found`);
        return country;
    }
}
