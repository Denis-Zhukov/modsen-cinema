import { IsInt, IsNumber } from 'class-validator';

export class SetMainFilmDto {
    @IsNumber()
    @IsInt()
    id: number;
}
