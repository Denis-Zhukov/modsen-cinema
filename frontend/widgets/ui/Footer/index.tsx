import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { interFont } from '@/shared/fonts';
import {
    StyledColumn,
    StyledFooter,
    StyledFooterWrapper,
    StyledSubscribe,
} from '@/widgets/ui/Footer/styled';

import Logo from './images/logo.png';

export const Footer = () => (
    <StyledFooterWrapper>
        <StyledFooter className={interFont.className}>
            <Image src={Logo} alt="modsen-logo" width={122.5} height={30}/>
            <StyledColumn>
                <h2>First column</h2>
                <Link href="/">First page</Link>
                <Link href="/">Second page</Link>
                <Link href="/">Third</Link>
                <Link href="/">Fourth</Link>
            </StyledColumn>
            <StyledColumn>
                <h2>Second</h2>
                <Link href="/">Fifth page</Link>
                <Link href="/">Sixth page</Link>
                <Link href="/">Eighth</Link>
            </StyledColumn>
            <StyledColumn>
                <h2>Third</h2>
                <Link href="/">Fifth page</Link>
                <Link href="/">Sixth page</Link>
                <Link href="/">Eighth</Link>
            </StyledColumn>
            <StyledSubscribe>
                <h2>Subscribe</h2>
                <input type="text" placeholder="Enter email"/>
                <p>Join our newsletter to stay up to date on features and releases</p>
            </StyledSubscribe>
        </StyledFooter>
    </StyledFooterWrapper>
);
