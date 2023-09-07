import { IsInt, IsNumber, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetTimesByDayMonthDto {
    @ApiProperty({ example: 21 })
    @IsNumber()
    @IsInt()
    @Min(1)
    @Max(31)
    day: number;

    @ApiProperty({ example: 6 })
    @IsNumber()
    @IsInt()
    @Min(1)
    @Max(31)
    month: number;
}
