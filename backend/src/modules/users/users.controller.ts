import {
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    public constructor(private readonly service: UsersService) {}

    @Get()
    getUsers() {
        return this.service.getAll();
    }

    @Get(':id')
    async getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = await this.service.getById(id);
        if (!user) throw new NotFoundException(`User with id ${id} not found`);
        return user;
    }
}
