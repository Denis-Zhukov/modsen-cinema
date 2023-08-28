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

@Controller('subscribe')
export class SubscribersController {
    constructor(private readonly subscribersService: SubscribersService) {}

    @Post()
    async subscribe(@Body() { email }: SubscribeDto) {
        try {
            return await this.subscribersService.subscribe(email);
        } catch (e) {
            throw new BadRequestException(UserErrors.ALREADY_SUBSCRIBED);
        }
    }

    @RestrictRoles(Roles.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('notify')
    notifyAll(@Body() { subject, text }: NotifyAllDto) {
        return this.subscribersService.notifyAll(subject, text);
    }
}
