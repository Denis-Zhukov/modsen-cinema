'use client';

import { useCallback } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

import { useAppSelector } from '@/shared/lib/hooks/redux-hooks';
import { useActions } from '@/shared/lib/hooks/useActions';
import { selectTheme } from '@/shared/model/store/selectors/theme.selectors';

import { StyledThemeButton } from './styled';

export const ThemeButton = () => {
    const { toggleTheme } = useActions();
    const theme = useAppSelector(selectTheme);

    const handleClick = useCallback(() => toggleTheme(), [toggleTheme]);

    return (
        <StyledThemeButton onClick={handleClick}>
            {theme === 'dark' ? <BiSun/> : <BiMoon/>}
        </StyledThemeButton>
    );
};
