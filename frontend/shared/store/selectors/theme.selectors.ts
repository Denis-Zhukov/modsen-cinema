import { RootState } from '@/shared/store';

export const selectTheme = (state: RootState) => state.theme.theme;
