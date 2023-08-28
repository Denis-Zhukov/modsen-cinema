import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '@/shared/api/AuthService';
import type { LoginRequest } from '@/shared/typing/api/requests/LoginRequest';
import { Notice } from '@/shared/typing/constants/Notice';
import { isTypedErrorFromAxios } from '@/shared/typing/guards/isTypedError';

export const loginThunk = createAsyncThunk(
    'auth/login',
    async ({ controller, ...data }: LoginRequest & { controller: AbortController }, { rejectWithValue }) => {
        try {
            const response = await AuthService.login(data, controller);
            return response.data;
        } catch (error: any) {
            if (isTypedErrorFromAxios(error)) return rejectWithValue(error.response.data.message);
            return rejectWithValue(Notice.UNEXPECTED_ERROR);
        }
    },
);
