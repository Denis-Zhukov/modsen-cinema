'use client';

import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';

import { SignInButton } from 'features/SignInButton';
import { SignUpButton } from 'features/SignUpButton';
import { NavItem } from '@/features/NavItem';
import { Forms } from '@/shared/config/constants/Forms';
import { poppinsFont } from 'shared/lib/fonts';
import { useAppSelector } from '@/shared/lib/hooks/redux-hooks';
import { useCreateQueryPath } from '@/shared/lib/hooks/useCreateQueryPath';
import { Routes } from '@/shared/config/constants/Routes';
import { Button } from '@/shared/ui/Button';
import {
    SettingsBlock,
    StyledAuthBlock,
    StyledHeader, StyledHeaderWrapper,
    StyledLogo,
    StyledNav,
} from '@/widgets/ui/Header/styled';
import { Profile } from '@/widgets/ui/Profile';

import Logo from './images/logo.png';

export const Header = () => {
    const t = useTranslations('header');
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    const createQueryPath = useCreateQueryPath();
    const [profileShow, setProfileShow] = useState(false);

    const handleToggle = useCallback(() => setProfileShow((prev) => !prev), []);

    return (
        <StyledHeaderWrapper className={poppinsFont.className}>
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
                    <NavItem path={Routes.Home}>{t('home')}</NavItem>
                    <NavItem path={Routes.Bookings}>{t('bookings')}</NavItem>
                </StyledNav>
                <StyledAuthBlock>
                    {isAuth ? <Button onClick={handleToggle}>{t('profile')}</Button> : (
                        <>
                            <SignUpButton/>
                            <SignInButton/>
                        </>
                    )}
                </StyledAuthBlock>
                {!isAuth
                    && <Link href={createQueryPath('form', Forms.SETTINGS)}><SettingsBlock/></Link>}

                <AnimatePresence>
                    {isAuth && profileShow && <Profile onClose={handleToggle}/>}
                </AnimatePresence>
            </StyledHeader>
        </StyledHeaderWrapper>
    );
};
