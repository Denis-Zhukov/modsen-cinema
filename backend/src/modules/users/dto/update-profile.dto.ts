import { IsEnum, IsString, IsOptional } from 'class-validator';
import { Sex } from '../../../utils/init-values/sex';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    name: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    surname: string;

    @ApiProperty({ enum: Sex, required: false })
    @IsOptional()
    @IsString()
    @IsEnum(Sex)
    sex: Sex;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    newPassword: string;
}
