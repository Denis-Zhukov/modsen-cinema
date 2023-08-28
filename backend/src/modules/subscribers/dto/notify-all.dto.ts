import { IsString } from 'class-validator';

export class NotifyAllDto {
    @IsString()
    subject: string;

    @IsString()
    text: string;
}
