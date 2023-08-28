import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { AddFilmDto } from './dto/add-film.dto';
import { GetTimesByDayMonthDto } from './dto/get-times-by-day-month.dto';
import { RestrictRoles } from '../../decarators/roles.decarator';
import { Roles } from '../../utils/init-values/roles';
import { JwtAuthGuard } from '../../guards/jwt.guard';
import { RolesGuard } from '../../guards/roles.guard';

@Controller('schedule')
export class ScheduleController {
    public constructor(private readonly service: ScheduleService) {}

    @Get()
    async getSchedule() {
        return this.service.getCurrentSchedule();
    }

    @Post(':id')
    async getTimesByDayMonth(
        @Param('id') filmId: number,
        @Body() dto: GetTimesByDayMonthDto,
    ) {
        return this.service.getFilmTimesByDay(filmId, dto);
    }

    @RestrictRoles(Roles.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('add')
    async addFilm(@Body() dto: AddFilmDto) {
        return this.service.addFilm(dto);
    }
}
