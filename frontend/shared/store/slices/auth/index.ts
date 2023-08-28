import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Storage } from '@/shared/lib/local-storage-utils';
import { loginThunk } from '@/shared/store/slices/auth/loginThunk';
import { logoutThunk } from '@/shared/store/slices/auth/logoutThunk';
import { refreshAuthThunk } from '@/shared/store/slices/auth/refreshAuthThunk';
import { LoginResponse } from '@/shared/typing/api/responses/LoginResponse';

type InitialState = {
    id: number | null,
    isAuth: boolean,
    name: string | null,
    surname: string | null,
    roles: string[],
    sex: string | null,
    avatar: string | null,

    isLoading: boolean,
    isSuccess: boolean,
    error: string | null
};

const initialState: InitialState = {
    id: null,
    isAuth: false,
    name: null,
    surname: null,
    roles: [],
    sex: null,
    avatar: null,

    isLoading: false,
    isSuccess: false,
    error: null,
};

const setPendingStatuses = (state: InitialState) => {
    state.isLoading = true;
    state.isSuccess = false;
    state.error = null;
};

const setFulfilledValues = (state: InitialState) => {
    state.isSuccess = true;
    state.isLoading = false;
};

const setRejectedValues = (state: InitialState, action: PayloadAction<unknown>) => {
    state.error = action.payload as string;
    state.isSuccess = false;
    state.isLoading = false;
};

const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        resetStatuses(state) {
            state.isLoading = false;
            state.isSuccess = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, setPendingStatuses)
            .addCase(loginThunk.fulfilled, (state, { payload }: PayloadAction<LoginResponse>) => {
                state.id = payload.id;
                state.name = payload.name;
                state.surname = payload.surname;
                state.roles = payload.roles;
                state.isAuth = true;
                state.sex = payload.sex;
                state.avatar = payload.avatar;
                Storage.setAccessToken(payload.accessToken);

                setFulfilledValues(state);
            })
            .addCase(loginThunk.rejected, setRejectedValues)
            .addCase(refreshAuthThunk.pending, setPendingStatuses)
            .addCase(refreshAuthThunk.fulfilled, (state, { payload }: PayloadAction<LoginResponse>) => {
                state.id = payload.id;
                state.name = payload.name;
                state.surname = payload.surname;
                state.roles = payload.roles;
                state.isAuth = true;
                state.sex = payload.sex;
                state.avatar = payload.avatar;
                Storage.setAccessToken(payload.accessToken);

                setFulfilledValues(state);
            })
            .addCase(refreshAuthThunk.rejected, setRejectedValues)
            .addCase(logoutThunk.pending, setPendingStatuses)
            .addCase(logoutThunk.fulfilled, (state) => {
                state.id = null;
                state.isAuth = false;
                state.name = null;
                state.surname = null;
                state.roles = [];
                state.sex = '';
                state.avatar = null;
                Storage.removeAccessToken();

                setFulfilledValues(state);
            })
            .addCase(logoutThunk.rejected, setRejectedValues);
    },
});

export default authSlice.reducer;
export const { ...authActions } = authSlice.actions;
