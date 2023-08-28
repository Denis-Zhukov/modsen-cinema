import { mimeTypesImages } from '../../../utils/mime-types';
import { BadRequestException } from '@nestjs/common';
import { UserErrors } from '../../../utils/user-errors';

export const fileFilter = (
    _: unknown,
    file: {
        fieldname: string;
        originalname: string;
        encoding: string;
        mimetype: string;
        size: number;
        destination: string;
        filename: string;
        path: string;
        buffer: Buffer;
    },
    callback: (error: Error | null, acceptFile: boolean) => void,
) => {
    let correctFile = false;

    if (file.fieldname === 'avatar')
        correctFile = mimeTypesImages.includes(file.mimetype);

    callback(
        correctFile
            ? null
            : new BadRequestException(UserErrors.WRONG_FILES_TYPE),
        correctFile,
    );
};
