import { ApiProperty } from '@nestjs/swagger';

export class NotFound {
    @ApiProperty({ default: 'Entity with id 1 not found' })
    message: string;
    @ApiProperty({ default: 'Not Found' })
    error: string;
    @ApiProperty({ default: 404 })
    statusCode: number;
}
