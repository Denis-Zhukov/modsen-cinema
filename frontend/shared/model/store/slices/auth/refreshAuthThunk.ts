import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '@/shared/api/services/AuthService';
import { Notice } from '@/shared/config/constants/Notice';

export const refreshAuthThunk = createAsyncThunk(
    'auth/init',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await AuthService.refresh();
            return data;
        } catch {
            return rejectWithValue(Notice.UNAUTH);
        }
    },
);
