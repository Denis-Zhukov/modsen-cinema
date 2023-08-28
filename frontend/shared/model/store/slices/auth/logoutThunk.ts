import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '@/shared/api/services/AuthService';
import { ErrorUtils } from '@/shared/lib/utils/ErrorUtils';
import { Notice } from '@/shared/config/constants/Notice';

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            return await AuthService.logout();
        } catch (error) {
            if (ErrorUtils.isTypedErrorFromAxios(error)) return rejectWithValue(error.response.data.message);
            return rejectWithValue(Notice.UNEXPECTED_ERROR);
        }
    },
);
