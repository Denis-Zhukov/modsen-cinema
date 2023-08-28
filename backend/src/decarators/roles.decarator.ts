import { SetMetadata } from '@nestjs/common';
import { Roles } from '../utils/init-values/roles';

export const RestrictRoles = (...roles: Roles[]) => SetMetadata('roles', roles);
