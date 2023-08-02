import Link from 'next/link';

import { NavButton } from '@/features/NavButton';
import { NavItem } from '@/features/NavItem';
import { poppinsFont } from '@/shared/fonts';
import { RoutePaths } from '@/shared/RoutePaths';
import {
    SettingsBlock,
    StyledAuthBlock,
    StyledHeader, StyledHeaderWrapper,
    StyledLogo,
    StyledNav,
} from '@/widgets/ui/Header/styled';

import Logo from './images/logo.png';
import Settings from './images/settings.png';

export const Header = () => (
    <StyledHeaderWrapper className={poppinsFont.className}>
        <StyledHeader>
            <Link href="/"><StyledLogo src={Logo} alt="modsen-logo" width={245} height={55}/></Link>
            <StyledNav>
                <NavItem path={RoutePaths.Home}>Home</NavItem>
                <NavItem path={RoutePaths.Bookings}>Bookings</NavItem>
            </StyledNav>
            <StyledAuthBlock>
                <NavButton path="#" variant="primary">Sign up</NavButton>
                <NavButton path="#" variant="secondary">Sign in</NavButton>
            </StyledAuthBlock>
            <SettingsBlock src={Settings} alt="settings" width={48} height={48}/>
        </StyledHeader>
    </StyledHeaderWrapper>
);
