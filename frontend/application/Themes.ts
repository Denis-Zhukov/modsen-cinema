import { Colors } from '@/shared/config/constants/Colors';

export const darkTheme = {
    type: 'dark',
    background: Colors.DARK_BLUE,
    text: {
        main: Colors.WHITE,
        inverse: Colors.BLACK,
    },
    error: Colors.RED,
    line: Colors.LIGHT_GRAY,
};

type InnerTheme = typeof darkTheme;

export const lightTheme: InnerTheme = {
    type: 'light',
    background: Colors.LIGHTER_GRAY,
    text: {
        main: Colors.BLACK,
        inverse: Colors.WHITE,
    },
    error: Colors.RED,
    line: Colors.DARK_GRAY,
};

export type Theme = { theme: InnerTheme };
