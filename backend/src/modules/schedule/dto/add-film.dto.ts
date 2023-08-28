import { IsDateString, IsInt, IsNumber } from 'class-validator';

export class AddFilmDto {
    @IsNumber()
    @IsInt()
    filmId: number;

    @IsNumber()
    price: number;

    @IsDateString()
    dateAndTime: Date;
}
