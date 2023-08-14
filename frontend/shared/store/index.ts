import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { api } from '@/shared/store/rtk/api';

import authReducer from './slices/auth';

const rootReducer = combineReducers({
    auth: authReducer,
    [api.reducerPath]: api.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
