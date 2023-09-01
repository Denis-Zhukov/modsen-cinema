import { ApiProperty } from '@nestjs/swagger';

export class LogoutResponseFailed {
    @ApiProperty({ example: 'Token not passed' })
    message: string;

    @ApiProperty({ example: 'Bad Request' })
    error: string;

    @ApiProperty({ example: 400 })
    statusCode: number;
}
