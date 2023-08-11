import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
    transform(value: any) {
        const oneKb = 1000;
        return value.size < oneKb;
    }
}
