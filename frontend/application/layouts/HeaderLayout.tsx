import React from 'react';

import { Header } from 'widgets/layouts/ui/Header';
import { InnerWrapper, OutWrapper } from '@/application/Layouts/styled';

export const HeaderLayout = ({ children }: { children: React.ReactNode }) => (
    <>
        <Header/>
        <OutWrapper>
            <InnerWrapper>{children}</InnerWrapper>
        </OutWrapper>
    </>
);
