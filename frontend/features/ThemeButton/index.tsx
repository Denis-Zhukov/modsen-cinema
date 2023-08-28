import { BiMoon, BiSun } from 'react-icons/bi';

import { StyledThemeButton } from '@/features/ThemeButton/styled';
import { useAppSelector } from '@/shared/lib/hooks/redux-hooks';
import { useActions } from '@/shared/lib/hooks/useActions';
import { selectTheme } from '@/shared/model/store/selectors/theme.selectors';

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
