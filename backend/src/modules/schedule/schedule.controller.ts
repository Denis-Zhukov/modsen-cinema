import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { AddFilmDto } from './dto/add-film.dto';
import { GetTimesByDayMonthDto } from './dto/get-times-by-day-month.dto';
import { RestrictRoles } from '../../decarators/roles.decarator';
import { Roles } from '../../utils/init-values/roles';
import { JwtAuthGuard } from '../../guards/jwt.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ScheduleEntity } from './schedule.entity';
import { SeatsService } from '../seats/seats.service';

@ApiTags('Schedule')
@Controller('schedule')
export class ScheduleController {
    public constructor(
        private readonly service: ScheduleService,
        private readonly seatsService: SeatsService,
    ) {}

    @ApiResponse({ type: [ScheduleEntity], status: 200 })
    @Get()
    async getSchedule() {
        return this.service.getCurrentSchedule();
    }

    @ApiResponse({ type: [ScheduleEntity], status: 201 })
    @Post(':id')
    async getTimesByDayMonth(
        @Param('id') filmId: number,
        @Body() dto: GetTimesByDayMonthDto,
    ) {
        const schedules = await this.service.getFilmTimesByDay(filmId, dto);
        const seats = await this.seatsService.getAll();
        return schedules.map(({ bookings, ...schedule }) => ({
            ...schedule,
            available: seats.length - bookings.length,
        }));
    }

    @ApiBearerAuth('auth')
    @ApiResponse({ type: ScheduleEntity })
    @RestrictRoles(Roles.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('add')
    async addFilm(@Body() dto: AddFilmDto) {
        return this.service.addFilm(dto);
    }
}
