'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import { LogoutButton } from '@/entities/ui/LogoutButton';
import { SignInButton } from '@/entities/ui/SignInButton';
import { SignUpButton } from '@/entities/ui/SignUpButton';
import { ThemeButton } from '@/entities/ui/ThemeButton';
import { LoginForm } from '@/features/LoginForm';
import { NavItem } from '@/features/NavItem';
import { RegisterForm } from '@/features/RegisterForm';
import { Forms } from '@/shared/constants/Forms';
import { poppinsFont } from '@/shared/fonts';
import { useAppSelector } from '@/shared/hooks/redux-hooks';
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
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()!;
    const form = searchParams.get('form');

    const handleCloseForm = useCallback(
        () => {
            const params = new URLSearchParams(searchParams.toString());
            params.delete('form');
            router.push(`${pathname}?${params.toString()}`);
        },
        [pathname, router, searchParams],
    );

    const isAuth = useAppSelector((state) => state.auth.isAuth);

    return (
        <StyledHeaderWrapper className={poppinsFont.className}>
            {form === Forms.REGISTER_FORM && <RegisterForm onClose={handleCloseForm}/>}
            {form === Forms.LOGIN_FORM && <LoginForm onClose={handleCloseForm}/>}
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
                    {isAuth ? <LogoutButton/> : (
                        <>
                            <SignUpButton />
                            <SignInButton />
                        </>
                    )}
                </StyledAuthBlock>
                <SettingsBlock src={Settings} alt="settings" width={48} height={48}/>
                <ThemeButton />
            </StyledHeader>
        </StyledHeaderWrapper>
    );
};
