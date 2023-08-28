import React, { useMemo } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@/shared/config/constants/Themes';
import { useAppSelector } from '@/shared/lib/hooks/redux-hooks';
import { selectTheme } from '@/shared/model/store/selectors/theme.selectors';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const theme = useAppSelector(selectTheme);

    const themeObject = useMemo(() => (theme === 'dark' ? darkTheme : lightTheme), [theme]);

    return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>;
};
