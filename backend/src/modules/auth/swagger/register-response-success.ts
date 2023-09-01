import { RolesEntity } from '../../roles/roles.entity';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterResponseSuccess {
    @ApiProperty({ example: 1 })
    id: string;

    @ApiProperty({ example: 'Denis' })
    name: string;

    @ApiProperty({ example: 'Zhukov' })
    surname: string;

    @ApiProperty({ example: 'deniszhukov@example.com' })
    email: string;

    @ApiProperty({
        example: '$2b$10$Wcsp7.WKmCcBaBWV6.Ex6uh4JGGtR41C2dMW0uC3Tz8XIAR124bqK',
    })
    hashPassword: string;

    @ApiProperty({ example: [{ id: 1, name: 'user' }] })
    roles: RolesEntity[];

    @ApiProperty({ example: null })
    refreshToken: string | null;

    @ApiProperty({ example: null })
    avatar: string | null;

    @ApiProperty({ example: null })
    avatarPath: string | null;
}
