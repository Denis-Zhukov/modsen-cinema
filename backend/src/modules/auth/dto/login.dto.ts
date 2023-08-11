import { IsEmail, IsString, Length } from 'class-validator';

export class LoginDto {
    @IsEmail()
    @IsString()
    @Length(5, 100)
    email: string;

    @IsString()
    password: string;
}
