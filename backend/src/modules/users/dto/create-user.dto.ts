import { IsEmail, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ default: 'Denis' })
    @Length(2, 50)
    @IsString()
    name: string;

    @ApiProperty({ default: 'Zhukov' })
    @Length(2, 50)
    @IsString()
    surname: string;

    @ApiProperty({ default: 'DenisZhukov@example.com' })
    @Length(5, 100)
    @IsEmail()
    @IsString()
    email: string;

    @ApiProperty({ default: 'Str0ngpassword' })
    @Length(2, 64)
    @IsString()
    password: string;
}
