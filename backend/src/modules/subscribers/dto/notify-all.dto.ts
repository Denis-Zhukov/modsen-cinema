import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NotifyAllDto {
    @ApiProperty({ example: 'Welcome to the Wu Kong' })
    @IsString()
    subject: string;

    @ApiProperty({ example: 'New film about Monkey King' })
    @IsString()
    text: string;
}
