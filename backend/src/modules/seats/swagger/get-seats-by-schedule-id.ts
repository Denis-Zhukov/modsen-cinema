import { ApiProperty } from '@nestjs/swagger';

class Seat {
    @ApiProperty({ example: 1 })
    rowNumber: number;
    @ApiProperty({ example: 1 })
    seatNumber: number;
    @ApiProperty({ example: true })
    available: boolean;
}

export class GetSeatsByScheduleId {
    @ApiProperty({
        type: [[Seat]],
        example: [
            [{ rowNumber: 1, seatNumber: 1, available: true }],
            [
                {
                    rowNumber: 2,
                    seatNumber: 1,
                    available: false,
                },
            ],
        ],
    })
    seats: Seat[];
    price: 5;
}
