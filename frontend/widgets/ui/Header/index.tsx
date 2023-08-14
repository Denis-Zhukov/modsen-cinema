'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import { LoginForm } from '@/features/LoginForm';
import { NavButton } from '@/features/NavButton';
import { NavItem } from '@/features/NavItem';
import { RegisterForm } from '@/features/RegisterForm';
import { poppinsFont } from '@/shared/fonts';
import { useCreateQueryPath } from '@/shared/hooks/useCreateQueryPath';
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
    const createQueryPath = useCreateQueryPath();

    const handleCloseForm = useCallback(
        () => {
            const params = new URLSearchParams(searchParams.toString());
            params.delete('form');
            router.push(`${pathname}?${params.toString()}`);
        },
        [pathname, router, searchParams],
    );

    return (
        <StyledHeaderWrapper className={poppinsFont.className}>
            {form === 'register' && <RegisterForm onClose={handleCloseForm}/>}
            {form === 'login' && <LoginForm onClose={handleCloseForm}/>}
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
                    <NavButton
                        path={createQueryPath('form', 'register')}
                        variant="primary"
                    >
                        Sign up
                    </NavButton>
                    <NavButton
                        path={createQueryPath('form', 'login')}
                        variant="secondary"
                    >
                        Sign in
                    </NavButton>
                </StyledAuthBlock>
                <SettingsBlock src={Settings} alt="settings" width={48} height={48}/>
            </StyledHeader>
        </StyledHeaderWrapper>
    );
};
