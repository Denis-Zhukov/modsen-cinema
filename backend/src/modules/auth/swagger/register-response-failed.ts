import { ApiProperty } from '@nestjs/swagger';

export class RegisterResponseFailed {
    @ApiProperty({ example: 'User with this email already exists' })
    error: string;

    @ApiProperty({ example: 'Bad Request' })
    message: string;

    @ApiProperty({ example: 400 })
    statusCod: number;
}
