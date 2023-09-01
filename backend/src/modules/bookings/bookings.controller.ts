import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Req,
    UseGuards,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookDto } from './dto/book.dto';
import { JwtAuthGuard } from '../../guards/jwt.guard';
import { Request } from 'express';
import { TokenService } from '../token/token.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookingsEntity } from './bookings.entity';
import { MyBookings } from './swagger/my-bookings';
import { CancelFailed } from './swagger/cancel-failed';

@ApiTags('Bookings')
@Controller('bookings')
export class BookingsController {
    constructor(
        private readonly bookingsService: BookingsService,
        private readonly tokenService: TokenService,
    ) {}

    @ApiResponse({ status: 200, type: [BookingsEntity] })
    @Get('schedule/:id')
    getBookingsBySchedule(@Param('id', ParseIntPipe) id: number) {
        return this.bookingsService.getByScheduleId(id);
    }

    @ApiResponse({ status: 201 })
    @ApiBearerAuth('auth')
    @Post()
    @UseGuards(JwtAuthGuard)
    async book(@Body() dto: BookDto, @Req() req: Request) {
        const token = req.headers.authorization.split(' ')[1];
        const user = await this.tokenService.verifyToken(token);
        return this.bookingsService.book(
            user.payload.id,
            dto.scheduleId,
            dto.seatIds,
        );
    }

    @ApiResponse({ status: 200, type: MyBookings })
    @ApiBearerAuth('auth')
    @Get('/my-upcoming-bookings')
    @UseGuards(JwtAuthGuard)
    async getUserUpcomingBooking(@Req() req: Request) {
        const token = req.headers.authorization.split(' ')[1];
        const user = await this.tokenService.verifyToken(token);
        return this.bookingsService.getUpcomingBookings(user.payload.id);
    }

    @ApiResponse({ status: 200, type: MyBookings })
    @ApiBearerAuth('auth')
    @Get('/my-visited-bookings')
    @UseGuards(JwtAuthGuard)
    async getUserVisitedBooking(@Req() req: Request) {
        const token = req.headers.authorization.split(' ')[1];
        const user = await this.tokenService.verifyToken(token);
        return this.bookingsService.getVisitedBookings(user.payload.id);
    }

    @ApiResponse({ status: 200, type: MyBookings })
    @ApiBearerAuth('auth')
    @Get('/my-missing-bookings')
    @UseGuards(JwtAuthGuard)
    async getUserMissingBooking(@Req() req: Request) {
        const token = req.headers.authorization.split(' ')[1];
        const user = await this.tokenService.verifyToken(token);
        return this.bookingsService.getMissingBookings(user.payload.id);
    }

    @ApiResponse({ status: 201, type: [BookingsEntity] })
    @ApiResponse({ status: 400, type: CancelFailed })
    @ApiBearerAuth('auth')
    @Delete('/cancel/:id')
    @UseGuards(JwtAuthGuard)
    async cancelBookings(
        @Param('id', ParseIntPipe) scheduleId: number,
        @Req() req: Request,
    ) {
        const token = req.headers.authorization.split(' ')[1];
        const user = await this.tokenService.verifyToken(token);
        return this.bookingsService.cancelBookings(user.payload.id, scheduleId);
    }
}
