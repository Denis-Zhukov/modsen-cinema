'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Button } from 'monema-ui';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';
import { Profile } from 'widgets/profiles/ui/Profile';

import { NavItem } from '@/entities/header';
import { SignInButton, SignUpButton } from '@/features/auth';
import { Forms } from '@/shared/config/constants/Forms';
import { Routes } from '@/shared/config/constants/Routes';
import { poppinsFont } from '@/shared/lib/fonts';
import { useAppSelector } from '@/shared/lib/hooks/redux-hooks';
import { useCreateQueryPath } from '@/shared/lib/hooks/useCreateQueryPath';

import Logo from './images/logo.png';
import {
    SettingsBlock,
    StyledAuthBlock,
    StyledHeader, StyledHeaderWrapper,
    StyledLogo,
    StyledNav,
} from './styled';

export const Header = () => {
    const t = useTranslations('header');
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    const createQueryPath = useCreateQueryPath();
    const [profileShow, setProfileShow] = useState(false);

    const handleToggle = useCallback(() => setProfileShow((prev) => !prev), []);

    return (
        <StyledHeaderWrapper className={poppinsFont.className}>
            <StyledHeader>
                <Link href={Routes.Home}>
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
                    && (
                        <Link href={createQueryPath('form', Forms.SETTINGS)}>
                            <motion.div whileHover={{ transform: 'rotate(30deg)' }}>
                                <SettingsBlock />
                            </motion.div>
                        </Link>
                    )}

                <AnimatePresence>
                    {isAuth && profileShow && <Profile onClose={handleToggle}/>}
                </AnimatePresence>
            </StyledHeader>
        </StyledHeaderWrapper>
    );
};
