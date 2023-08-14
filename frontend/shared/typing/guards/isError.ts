import { ErrorResponse } from '@/shared/typing/api/responses/error';

export const isTypedError = (error: any): error is ErrorResponse => (
    error.data && error.data.message !== undefined
    && error.data.error !== undefined && error.data.statusCode !== undefined
);
