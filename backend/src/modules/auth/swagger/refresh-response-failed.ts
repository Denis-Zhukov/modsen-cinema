import { ApiProperty } from '@nestjs/swagger';

export class RefreshResponseFailed {
    @ApiProperty({ example: 'Wrong refresh token' })
    message: string;

    @ApiProperty({ example: 'Unauthorized' })
    error: string;

    @ApiProperty({ example: 401 })
    statusCode: number;
}
