import {
    BadRequestException,
    Body,
    Controller,
    Post,
    UseGuards,
} from '@nestjs/common';
import { SubscribeDto } from './dto/subscribe.dto';
import { SubscribersService } from './subscribers.service';
import { NotifyAllDto } from './dto/notify-all.dto';
import { JwtAuthGuard } from '../../guards/jwt.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { RestrictRoles } from '../../decarators/roles.decarator';
import { Roles } from '../../utils/init-values/roles';
import { UserErrors } from '../../utils/user-errors';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SubscribersEntity } from './subscribers.entity';
import { SubscribeError } from './swagger/subscribe-error';

@ApiTags('Subscribers')
@Controller('subscribe')
export class SubscribersController {
    constructor(private readonly subscribersService: SubscribersService) {}

    @ApiResponse({ type: SubscribersEntity, status: 201 })
    @ApiResponse({ type: SubscribeError, status: 400 })
    @ApiBody({ type: SubscribeDto })
    @Post()
    async subscribe(@Body() { email }: SubscribeDto) {
        try {
            return await this.subscribersService.subscribe(email);
        } catch (e) {
            throw new BadRequestException(UserErrors.ALREADY_SUBSCRIBED);
        }
    }

    @ApiResponse({ status: 201, description: 'Body is missing' })
    @ApiBody({ type: SubscribeDto })
    @Post()
    async unsubscribe(@Body() { email }: SubscribeDto) {
        return await this.subscribersService.subscribe(email);
    }

    @ApiBody({ type: NotifyAllDto })
    @ApiResponse({
        status: 201,
        description: 'Body depends on the mail service',
    })
    @ApiBearerAuth('auth')
    @RestrictRoles(Roles.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('notify')
    notifyAll(@Body() { subject, text }: NotifyAllDto) {
        return this.subscribersService.notifyAll(subject, text);
    }
}
