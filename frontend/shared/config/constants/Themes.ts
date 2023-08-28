export const darkTheme = {
    type: 'dark',
    background: '#1E1F27',
    text: {
        main: '#FFFFFF',
        inverse: '#000000',
    },
    error: '#FF0000',
    line: '#D9D9D9',
};

type InnerTheme = typeof darkTheme;

export const lightTheme: InnerTheme = {
    type: 'light',
    background: '#dcdcdc',
    text: {
        main: '#000000',
        inverse: '#FFFFFF',
    },
    error: '#FF0000',
    line: '#262626',
};

export type Theme = { theme: InnerTheme };
