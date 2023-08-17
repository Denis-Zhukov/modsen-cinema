import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '@/shared/api/AuthService';
import { Notice } from '@/shared/typing/constants/Notice';
import { isTypedErrorFromAxios } from '@/shared/typing/guards/isTypedError';

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            return await AuthService.logout();
        } catch (error) {
            if (isTypedErrorFromAxios(error)) return rejectWithValue(error.response.data.message);
            return rejectWithValue(Notice.UNEXPECTED_ERROR);
        }
    },
);
