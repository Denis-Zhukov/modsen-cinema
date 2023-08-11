import {
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
} from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
    public constructor(private readonly service: CountriesService) {}

    @Get()
    getCountries() {
        return this.service.getAll();
    }

    @Get(':id')
    async getCountryById(@Param('id', ParseIntPipe) id: number) {
        const country = await this.service.getById(id);
        if (!country)
            throw new NotFoundException(`Country with id ${id} not found`);
        return country;
    }
}
