import { IsNumber, IsString, Length, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class AddFilmDto {
    @IsString()
    @Length(1, 100)
    name: string;

    @IsNumber()
    @Type(() => Number)
    @Min(1500)
    @Max(5000)
    release: string;

    @IsString()
    @Length(1, 2000)
    description: string;
}
