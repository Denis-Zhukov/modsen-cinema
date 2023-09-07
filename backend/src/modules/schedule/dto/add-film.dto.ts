import { IsDateString, IsInt, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddFilmDto {
    @ApiProperty({ example: 1 })
    @IsNumber()
    @IsInt()
    filmId: number;

    @ApiProperty({ example: 5 })
    @ApiProperty()
    @IsNumber()
    price: number;

    @ApiProperty({ example: new Date().toUTCString() })
    @ApiProperty()
    @IsDateString()
    dateAndTime: Date;
}
