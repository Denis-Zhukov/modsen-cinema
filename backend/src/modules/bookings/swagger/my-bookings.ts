import { ApiProperty } from '@nestjs/swagger';
import { FilmsEntity } from '../../films/films.entity';

export class MyBookings {
    @ApiProperty({ example: 'U1C2S1' })
    ticket: string;

    @ApiProperty({ example: 1 })
    scheduleId: number;

    @ApiProperty({
        example: 'Thu Aug 31 2023 18:24:29 GMT+0300 (Moscow Standard Time)',
    })
    dataAndTime: string;

    @ApiProperty({ example: 2 })
    count: number;

    @ApiProperty({
        example: [
            { rowNumber: 1, seatNumber: 1 },
            { rowNumber: 1, seatNumber: 2 },
        ],
    })
    seats: { rowNumber: number; seatNumber: number }[];

    @ApiProperty({ example: 75 })
    paid: number;

    @ApiProperty()
    film: FilmsEntity;
}
