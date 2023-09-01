import { ApiProperty } from '@nestjs/swagger';

export class CancelFailed {
    @ApiProperty({ example: "You haven't bookings at this schedule" })
    message: string;

    @ApiProperty({ example: 'Bad Request' })
    error: string;

    @ApiProperty({ example: 400 })
    statusCode: number;
}
