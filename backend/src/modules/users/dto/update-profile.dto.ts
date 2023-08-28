import { IsEnum, IsString, IsOptional } from 'class-validator';
import { Sex } from '../../../utils/init-values/sex';

export class UpdateProfileDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    surname: string;

    @IsOptional()
    @IsString()
    @IsEnum(Sex)
    sex: Sex;

    @IsOptional()
    @IsString()
    newPassword: string;
}
