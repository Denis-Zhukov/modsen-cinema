import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    theme: 'dark' | 'light'
};

const initialState: InitialState = {
    theme: 'dark',
};

export const themeSlice = createSlice({
    initialState,
    name: 'theme',
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        },
    },
});

export default themeSlice.reducer;
export const { ...themeActions } = themeSlice.actions;
