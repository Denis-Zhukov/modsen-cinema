import { IsEmail, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({ default: 'DenisZhukov@example.com' })
    @IsEmail()
    @IsString()
    @Length(5, 100)
    email: string;

    @ApiProperty({ default: 'Str0ngpassword' })
    @IsString()
    password: string;
}
