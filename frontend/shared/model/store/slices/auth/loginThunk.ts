import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '@/shared/api/services/AuthService';
import { ErrorUtils } from '@/shared/lib/utils/ErrorUtils';
import type { LoginRequest } from '@/shared/model/store/rtk/typing/requests/LoginRequest';
import { Notice } from '@/shared/config/constants/Notice';

export const loginThunk = createAsyncThunk(
    'auth/login',
    async ({ controller, ...data }: LoginRequest & { controller: AbortController }, { rejectWithValue }) => {
        try {
            const response = await AuthService.login(data, controller);
            return response.data;
        } catch (error: any) {
            if (ErrorUtils.isTypedErrorFromAxios(error)) return rejectWithValue(error.response.data.message);
            return rejectWithValue(Notice.UNEXPECTED_ERROR);
        }
    },
);
