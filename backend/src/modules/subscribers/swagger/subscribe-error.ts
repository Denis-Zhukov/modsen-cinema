import { ApiProperty } from '@nestjs/swagger';
import { UserErrors } from '../../../utils/user-errors';

export class SubscribeError {
    @ApiProperty({ example: UserErrors.ALREADY_SUBSCRIBED })
    message: string;

    @ApiProperty({ example: 'Bad Request' })
    error: string;

    @ApiProperty({ example: 400 })
    statusCode: string;
}
