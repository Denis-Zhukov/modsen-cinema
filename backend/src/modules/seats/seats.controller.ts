import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Param,
    Post,
    UseGuards,
} from '@nestjs/common';
import { SeatsService } from './seats.service';
import { SetLayoutDto } from './dto/set-layout.dto';
import { UserErrors } from '../../utils/user-errors';
import { ScheduleService } from '../schedule/schedule.service';
import { RestrictRoles } from '../../decarators/roles.decarator';
import { Roles } from '../../utils/init-values/roles';
import { JwtAuthGuard } from '../../guards/jwt.guard';
import { RolesGuard } from '../../guards/roles.guard';

@Controller('seats')
export class SeatsController {
    public constructor(
        private readonly service: SeatsService,
        private readonly scheduleService: ScheduleService,
    ) {}

    @Get()
    getSeats() {
        return this.service.getAll();
    }

    @RestrictRoles(Roles.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('set-layout')
    async addLayout(@Body() data: SetLayoutDto) {
        return await this.service.setLayout(data);
    }

    @Get(':id')
    async getSeatsByScheduleId(@Param('id') scheduleId: number) {
        const schedule = await this.scheduleService.getById(scheduleId);
        if (!schedule)
            throw new BadRequestException(UserErrors.SCHEDULE_NOT_EXISTS);
        const seats = await this.service.getSeatsBySchedule(scheduleId);

        const now = new Date();
        now.setHours(0, 0, 0, 0);
        const scheduleDate = new Date(schedule.dateAndTime);

        const timeDiff = Math.abs(scheduleDate.getTime() - now.getTime());
        const oneDay = 1000 * 60 * 60 * 24;
        const diffDays = Math.floor(timeDiff / oneDay);

        return {
            seats,
            price: schedule.price - diffDays * (0.05 * schedule.price),
        };
    }
}
