import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseFailed {
    @ApiProperty({ example: 'Wrong email or password' })
    message: string;

    @ApiProperty({ example: 'Bad Request' })
    error: string;

    @ApiProperty({ example: 400 })
    statusCode: number;
}
