import { ArrayNotEmpty, IsArray, IsInt, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BookDto {
    @ApiProperty({ default: 1 })
    @IsNumber()
    @IsInt()
    scheduleId: number;

    @ApiProperty({ default: [1, 2] })
    @IsArray()
    @ArrayNotEmpty()
    @IsNumber({}, { each: true })
    seatIds: number[];
}
