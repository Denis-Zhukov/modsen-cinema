import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SubscribeDto {
    @ApiProperty({ example: 'example@gmail.com' })
    @IsString()
    @IsEmail()
    email: string;
}
