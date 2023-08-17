import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '@/shared/api/AuthService';

export const initAuthThunk = createAsyncThunk(
    'auth/init',
    async () => {
        const { data } = await AuthService.refresh();
        return data.accessToken;
    },
);
