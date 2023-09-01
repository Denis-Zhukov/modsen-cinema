import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

export const ApiLimitOffset = () =>
    applyDecorators(
        ApiQuery({ name: 'limit', required: false, type: Number }),
        ApiQuery({ name: 'offset', required: false, type: Number }),
    );
