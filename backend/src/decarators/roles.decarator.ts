import { SetMetadata } from '@nestjs/common';
import { Roles } from '../typing/Roles';

export const RestrictRoles = (...roles: Roles[]) => SetMetadata('roles', roles);
