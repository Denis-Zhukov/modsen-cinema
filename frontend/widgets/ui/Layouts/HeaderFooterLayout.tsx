import React from 'react';

import { Footer } from '@/widgets/ui/Footer';
import { Header } from '@/widgets/ui/Header';
import { InnerWrapper, OutWrapper } from '@/widgets/ui/Layouts/styled';

export const HeaderFooterLayout = ({ children }: { children: React.ReactNode }) => (
    <>
        <Header/>
        <OutWrapper>
            <InnerWrapper>{children}</InnerWrapper>
        </OutWrapper>
        <Footer/>
    </>
);
