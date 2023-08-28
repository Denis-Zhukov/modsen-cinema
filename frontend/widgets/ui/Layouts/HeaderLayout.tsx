import React from 'react';

import { Header } from '@/widgets/ui/Header';
import { InnerWrapper, OutWrapper } from '@/widgets/ui/Layouts/styled';

export const HeaderLayout = ({ children }: { children: React.ReactNode }) => (
    <>
        <Header/>
        <OutWrapper>
            <InnerWrapper>{children}</InnerWrapper>
        </OutWrapper>
    </>
);
