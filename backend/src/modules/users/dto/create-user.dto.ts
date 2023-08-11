import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @Length(2, 50)
    @IsString()
    name: string;

    @Length(2, 50)
    @IsString()
    surname: string;

    @Length(5, 100)
    @IsEmail()
    @IsString()
    email: string;

    @Length(2, 64)
    @IsString()
    password: string;
}
