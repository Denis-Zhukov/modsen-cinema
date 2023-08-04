import {
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
} from '@nestjs/common';
import { SeatsService } from './seats.service';

@Controller('seats')
export class SeatsController {
    public constructor(private readonly service: SeatsService) {}

    @Get()
    getSeats() {
        return this.service.getAll();
    }

    @Get(':id')
    async getSeatById(@Param('id', ParseIntPipe) id: number) {
        const seat = await this.service.getById(id);
        if (!seat) throw new NotFoundException(`Seat with id ${id} not found`);
        return seat;
    }
}
