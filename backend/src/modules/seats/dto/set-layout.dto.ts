import {
    ArrayNotEmpty,
    IsArray,
    IsNumber,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class Seat {
    @ApiProperty({ example: 1 })
    @IsNumber()
    row: number;

    @ApiProperty({ example: 2 })
    @IsNumber()
    seat: number;
}

export class SetLayoutDto {
    @ApiProperty({ type: [Seat], example: [{ row: 1, seat: 2 }] })
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => Seat)
    seats: Seat[];
}
