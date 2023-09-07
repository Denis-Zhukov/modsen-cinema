import { ApiProperty } from '@nestjs/swagger';

export class GetMainError {
    @ApiProperty({ example: 'No such main film' })
    message: string;
    @ApiProperty({ example: "I'm a teapot" })
    error: string;
    @ApiProperty({ example: 418 })
    statusCode: number;
}
