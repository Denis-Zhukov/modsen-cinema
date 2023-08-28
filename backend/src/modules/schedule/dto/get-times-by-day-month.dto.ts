import { IsInt, IsNumber, Max, Min } from 'class-validator';

export class GetTimesByDayMonthDto {
    @IsNumber()
    @IsInt()
    @Min(1)
    @Max(31)
    day: number;

    @IsNumber()
    @IsInt()
    @Min(1)
    @Max(31)
    month: number;
}
