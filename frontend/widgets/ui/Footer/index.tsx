import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Subscribe } from 'features/Subscribe';
import { interFont } from 'shared/lib/fonts';
import {
    StyledColumn,
    StyledFooter,
    StyledFooterWrapper, StyledLogo,
} from '@/widgets/ui/Footer/styled';

import Logo from './images/logo.png';

export const Footer = () => {
    const t = useTranslations('footer');

    return (
        <StyledFooterWrapper>
            <StyledFooter className={interFont.className}>
                <StyledLogo src={Logo} alt="modsen-logo" width={122.5} height={30}/>
                <StyledColumn>
                    <h2>{t('firstColumn')}</h2>
                    <Link href="/">{t('firstPage')}</Link>
                    <Link href="/">{t('secondPage')}</Link>
                    <Link href="/">{t('thirdPage')}</Link>
                    <Link href="/">{t('fourthPage')}</Link>
                </StyledColumn>
                <StyledColumn>
                    <h2>{t('secondColumn')}</h2>
                    <Link href="/">{t('fifthPage')}</Link>
                    <Link href="/">{t('sixthPage')}</Link>
                    <Link href="/">{t('seventhPage')}</Link>
                </StyledColumn>
                <StyledColumn>
                    <h2>{t('thirdColumn')}</h2>
                    <Link href="/">{t('eighthPage')}</Link>
                    <Link href="/">{t('ninthPage')}</Link>
                    <Link href="/">{t('tenthPage')}</Link>
                </StyledColumn>
                <Subscribe/>
            </StyledFooter>
        </StyledFooterWrapper>
    );
};
