import { RootState } from '@/shared/model/store';

export const selectTheme = (state: RootState) => state.theme.theme;
