import { ArrayNotEmpty, IsArray, IsInt, IsNumber } from 'class-validator';

export class BookDto {
    @IsNumber()
    @IsInt()
    scheduleId: number;

    @IsArray()
    @ArrayNotEmpty()
    @IsNumber({}, { each: true })
    seatIds: number[];
}
