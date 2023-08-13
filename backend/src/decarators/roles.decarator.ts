import { SetMetadata } from '@nestjs/common';
import { Roles } from '../utils/roles';

export const RestrictRoles = (...roles: Roles[]) => SetMetadata('roles', roles);
