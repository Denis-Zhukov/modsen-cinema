import { ApiProperty } from '@nestjs/swagger';

export class AddFilmError {
    @ApiProperty({
        example: [
            'release must not be greater than 5000',
            'release must not be less than 1500',
            'release must be a number conforming to the specified constraints',
        ],
    })
    message: string[];

    @ApiProperty({ example: 'Bad Request' })
    error: string;

    @ApiProperty({ example: 400 })
    statusCode: number;
}
