import { NavButton } from 'features/NavButton';
import { NavItem } from 'features/NavItem';
import Link from 'next/link';
import {
    SettingsBlock,
    StyledAuthBlock,
    StyledHeader,
    StyledLogo,
    StyledNav,
} from 'widgets/ui/Header/styled';

import Logo from './images/logo.png';
import Settings from './images/settings.png';

export const Header = () => (
    <StyledHeader>
        <Link href="/"><StyledLogo src={Logo} alt="modsen-logo" width={245} height={55} /></Link>
        <StyledNav>
            <NavItem path="/">Home</NavItem>
            <NavItem path="/booking">Booking</NavItem>
        </StyledNav>
        <StyledAuthBlock>
            <NavButton path="#" variant="primary">Sign up</NavButton>
            <NavButton path="#" variant="secondary">Sign in</NavButton>
        </StyledAuthBlock>
        <SettingsBlock src={Settings} alt="settings" width={48} height={48} />
    </StyledHeader>
);
