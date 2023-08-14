import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    id: number | null,
    isAuth: boolean,
    name: string | null,
    surname: string | null,

    loading: boolean,
    error: null | any
};

const initialState: InitialState = {
    id: 0,
    isAuth: false,
    name: null,
    surname: null,

    loading: false,
    error: null,
};

const index = createSlice({
    initialState,
    name: 'auth',
    reducers: {},
});

export default index.reducer;
