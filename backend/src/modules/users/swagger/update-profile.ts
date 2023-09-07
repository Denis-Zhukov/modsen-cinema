import { ApiProperty } from '@nestjs/swagger';
import { Sex } from '../../../utils/init-values/sex';

export class UpdateProfile {
    @ApiProperty({ required: false })
    name: string;

    @ApiProperty({ required: false })
    surname: string;

    @ApiProperty({ enum: Sex, required: false })
    sex: Sex;

    @ApiProperty({ required: false })
    newPassword: string;

    @ApiProperty({
        example: '01010101',
        type: 'string',
        format: 'binary',
        description: 'File',
        required: false,
    })
    avatar: Express.Multer.File;
}
