import {
    Body,
    Controller,
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

@Controller('bookings')
export class BookingsController {
    constructor(
        private readonly bookingsService: BookingsService,
        private readonly tokenService: TokenService,
    ) {}

    @Get('schedule/:id')
    getBookingsBySchedule(@Param('id', ParseIntPipe) id: number) {
        return this.bookingsService.getByScheduleId(id);
    }

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

    @Get('/my-upcoming-bookings')
    @UseGuards(JwtAuthGuard)
    async getUserUpcomingBooking(@Req() req: Request) {
        const token = req.headers.authorization.split(' ')[1];
        const user = await this.tokenService.verifyToken(token);
        return this.bookingsService.getUpcomingBookings(user.payload.id);
    }

    @Get('/my-visited-bookings')
    @UseGuards(JwtAuthGuard)
    async getUserVisitedBooking(@Req() req: Request) {
        const token = req.headers.authorization.split(' ')[1];
        const user = await this.tokenService.verifyToken(token);
        return this.bookingsService.getVisitedBookings(user.payload.id);
    }

    @Get('/my-missing-bookings')
    @UseGuards(JwtAuthGuard)
    async getUserMissingBooking(@Req() req: Request) {
        const token = req.headers.authorization.split(' ')[1];
        const user = await this.tokenService.verifyToken(token);
        return this.bookingsService.getMissingBookings(user.payload.id);
    }

    @Get('/cancel/:id')
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
