'use client';

import React from 'react';

import { AuthWrapper } from '@/shared/lib/AuthWrapper';
import { ReduxProvider } from '@/shared/lib/redux-provider';
import { StyledComponentsRegistry } from '@/shared/lib/registry';
import { ThemesProvider } from '@/shared/lib/ThemesProvider';

export const Providers = ({
    children,
}: { children: React.ReactNode }) => (
    <ReduxProvider>
        <ThemesProvider>
            <StyledComponentsRegistry>
                <AuthWrapper>
                    {children}
                </AuthWrapper>
            </StyledComponentsRegistry>
        </ThemesProvider>
    </ReduxProvider>
);
