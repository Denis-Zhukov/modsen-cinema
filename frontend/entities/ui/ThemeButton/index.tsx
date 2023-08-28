import { BiMoon, BiSun } from 'react-icons/bi';

import { StyledThemeButton } from '@/entities/ui/ThemeButton/styled';
import { useAppSelector } from '@/shared/hooks/redux-hooks';
import { useActions } from '@/shared/hooks/useActions';
import { selectTheme } from '@/shared/store/selectors/theme.selectors';

export const ThemeButton = () => {
    const { toggleTheme } = useActions();
    const theme = useAppSelector(selectTheme);

    const handleClick = () => toggleTheme();

    return (
        <StyledThemeButton onClick={handleClick}>
            {theme === 'dark' ? <BiSun/> : <BiMoon/>}
        </StyledThemeButton>
    );
};
