'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';

import { LoginForm } from '@/features/LoginForm';
import { NavButton } from '@/features/NavButton';
import { NavItem } from '@/features/NavItem';
import { RegisterForm } from '@/features/RegisterForm';
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

export const Header = () => {
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const handleToggleRegisterForm = useCallback(() => {
        setShowRegisterForm((prev) => !prev);
    }, []);

    const [showLoginForm, setShowLoginForm] = useState(false);
    const handleToggleLoginForm = useCallback(() => {
        setShowLoginForm((prev) => !prev);
    }, []);

    return (
        <StyledHeaderWrapper className={poppinsFont.className}>
            {showRegisterForm && <RegisterForm onClose={handleToggleRegisterForm}/>}
            {showLoginForm && <LoginForm onClose={handleToggleLoginForm}/>}
            <StyledHeader>
                <Link href="/">
                    <StyledLogo
                        src={Logo}
                        alt="modsen-logo"
                        width={245}
                        height={55}
                    />
                </Link>
                <StyledNav>
                    <NavItem path={RoutePaths.Home}>Home</NavItem>
                    <NavItem path={RoutePaths.Bookings}>Bookings</NavItem>
                </StyledNav>
                <StyledAuthBlock>
                    <NavButton path="#" variant="primary" onClick={handleToggleRegisterForm}>
                        Sign up
                    </NavButton>
                    <NavButton path="#" variant="secondary" onClick={handleToggleLoginForm}>
                        Sign in
                    </NavButton>
                </StyledAuthBlock>
                <SettingsBlock src={Settings} alt="settings" width={48} height={48}/>
            </StyledHeader>
        </StyledHeaderWrapper>
    );
};
