import React, { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@/shared/constants/themes';
import { useAppSelector } from '@/shared/hooks/redux-hooks';
import { selectTheme } from '@/shared/store/selectors/theme.selectors';

export const ThemesProvider = ({ children }: { children: React.ReactNode }) => {
    const theme = useAppSelector(selectTheme);

    const themeObject = useMemo(() => (theme === 'dark' ? darkTheme : lightTheme), [theme]);

    return <ThemeProvider theme={themeObject}>{children}</ThemeProvider>;
};
