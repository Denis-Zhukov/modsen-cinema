import {
    Body,
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    Req,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../../guards/jwt.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { RestrictRoles } from '../../decarators/roles.decarator';
import { Roles } from '../../utils/init-values/roles';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from './utils/file-filter';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { TokenService } from '../token/token.service';
import type { Request } from 'express';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersEntity } from './users.entity';
import { NotFound } from '../../utils/responses/not-found';
import { UpdateProfile } from './swagger/update-profile';
import { JwtPayload } from '../token/types';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    public constructor(
        private readonly service: UsersService,
        private readonly tokenService: TokenService,
    ) {}

    @ApiBearerAuth('auth')
    @ApiResponse({ type: [UsersEntity], status: 200 })
    @RestrictRoles(Roles.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get()
    getUsers() {
        return this.service.getAll();
    }

    @ApiResponse({ type: UsersEntity, status: 200 })
    @ApiResponse({ type: NotFound, status: 404 })
    @ApiBearerAuth('auth')
    @RestrictRoles(Roles.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get(':id')
    async getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = await this.service.getById(id);
        if (!user) throw new NotFoundException(`User with id ${id} not found`);
        return user;
    }

    @ApiBody({ type: UpdateProfile })
    @ApiResponse({ type: UsersEntity, status: 201 })
    @ApiBearerAuth('auth')
    @UseGuards(JwtAuthGuard)
    @Post('update-profile')
    @UseInterceptors(FileInterceptor('avatar', { fileFilter }))
    async updateProfile(
        @Body() dto: UpdateProfileDto,
        @UploadedFile()
        avatar: Express.Multer.File,
        @Req() req: Request,
    ) {
        const user = req.user as JwtPayload;
        return this.service.updateProfile(user.id, avatar, dto);
    }
}
