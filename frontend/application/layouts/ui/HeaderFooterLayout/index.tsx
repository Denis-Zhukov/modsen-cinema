import React from 'react';

import { Footer } from '@/widgets/layouts/ui/Footer';
import { Header } from '@/widgets/layouts/ui/Header';

import { InnerWrapper, OutWrapper } from './styled';

export const HeaderFooterLayout = ({ children }: { children: React.ReactNode }) => (
    <>
        <Header/>
        <OutWrapper>
            <InnerWrapper>{children}</InnerWrapper>
        </OutWrapper>
        <Footer/>
    </>
);
