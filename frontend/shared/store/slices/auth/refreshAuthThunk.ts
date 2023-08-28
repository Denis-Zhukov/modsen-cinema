import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '@/shared/api/AuthService';
import { Notice } from '@/shared/typing/constants/Notice';

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
