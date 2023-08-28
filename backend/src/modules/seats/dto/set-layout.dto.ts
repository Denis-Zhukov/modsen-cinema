import {
    ArrayNotEmpty,
    IsArray,
    IsNumber,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class Seat {
    @IsNumber()
    row: number;

    @IsNumber()
    seat: number;
}

export class SetLayoutDto {
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => Seat)
    seats: Seat[];
}
