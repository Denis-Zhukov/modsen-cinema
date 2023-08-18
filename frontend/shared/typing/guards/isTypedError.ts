import { ErrorResponse, ErrorResponseFromAxios } from '@/shared/typing/api/responses/error';

export const isTypedError = (error: any): error is ErrorResponse => (
    error.data && error.data
    && error.data.error !== undefined && error.data.statusCode !== undefined
);

export const isTypedErrorFromAxios = (error: any): error is ErrorResponseFromAxios => (
    error.response !== undefined && isTypedError(error.response)
);
