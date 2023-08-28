import { IsEmail, IsString } from 'class-validator';

export class SubscribeDto {
    @IsString()
    @IsEmail()
    email: string;
}
