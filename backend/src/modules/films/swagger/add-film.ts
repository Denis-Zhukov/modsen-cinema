import { ApiProperty } from '@nestjs/swagger';

export class AddFilm {
    @ApiProperty({ example: 'Batman' })
    name: string;

    @ApiProperty({ example: '2009' })
    release: string;

    @ApiProperty({ example: 'Cool batman' })
    description: string;

    @ApiProperty({
        example: '01010101',
        type: 'string',
        format: 'binary',
        description: 'File',
    })
    preview: [Express.Multer.File];

    @ApiProperty({
        example: '01010101',
        type: 'string',
        format: 'binary',
        description: 'File',
    })
    trailer: [Express.Multer.File];
}
