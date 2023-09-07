import { IsInt, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SetMainFilmDto {
    @ApiProperty({ example: 1 })
    @IsNumber()
    @IsInt()
    id: number;
}
