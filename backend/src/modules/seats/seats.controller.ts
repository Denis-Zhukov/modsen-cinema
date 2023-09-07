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
import { Seat, SetLayoutDto } from './dto/set-layout.dto';
import { UserErrors } from '../../utils/user-errors';
import { RestrictRoles } from '../../decarators/roles.decarator';
import { Roles } from '../../utils/init-values/roles';
import { JwtAuthGuard } from '../../guards/jwt.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SeatsEntity } from './seats.entity';
import { NotFound } from '../../utils/responses/not-found';
import { BookingsService } from '../bookings/bookings.service';
import { GetSeatsByScheduleId } from './swagger/get-seats-by-schedule-id';
import { ScheduleService } from '../schedule/schedule.service';

@ApiTags('Seats')
@Controller('seats')
export class SeatsController {
    public constructor(
        private readonly service: SeatsService,
        private readonly bookingsService: BookingsService,
        private readonly scheduleService: ScheduleService,
    ) {}

    @ApiResponse({ type: [SeatsEntity], status: 200 })
    @Get()
    getSeats() {
        return this.service.getAll();
    }

    @ApiBody({ type: SetLayoutDto })
    @ApiResponse({ type: [Seat], status: 201 })
    @ApiBearerAuth('auth')
    @RestrictRoles(Roles.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('set-layout')
    async addLayout(@Body() dto: SetLayoutDto) {
        await this.service.setLayout(dto);
        return dto.seats;
    }

    @ApiResponse({ type: NotFound, status: 404 })
    @ApiResponse({ type: GetSeatsByScheduleId, status: 200 })
    @Get(':id')
    async getSeatsByScheduleId(@Param('id') scheduleId: number) {
        const schedule = await this.scheduleService.getById(scheduleId);
        if (!schedule)
            throw new BadRequestException(UserErrors.SCHEDULE_NOT_EXISTS);
        const seats = await this.service.getSeatsBySchedule(scheduleId);

        return {
            seats,
            price: this.bookingsService.calculatePriceWithSale(
                schedule.price,
                new Date(schedule.dateAndTime),
            ),
        };
    }
}
