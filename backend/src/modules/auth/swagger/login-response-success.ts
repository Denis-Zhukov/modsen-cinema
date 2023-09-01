import { RolesEntity } from '../../roles/roles.entity';
import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseSuccess {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'Denis' })
    name: string;

    @ApiProperty({ example: 'Zhukov' })
    surname: string;

    @ApiProperty({ example: 'lon.gto.ken' })
    accessToken: string;

    @ApiProperty({
        example: [
            {
                id: 1,
                name: 'user',
            },
        ],
    })
    roles: RolesEntity[];

    @ApiProperty({ example: null })
    avatar: string | null;
}
