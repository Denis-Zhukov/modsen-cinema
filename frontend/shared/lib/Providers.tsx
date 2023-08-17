'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';

import { AuthWrapper } from '@/shared/lib/AuthWrapper';
import { ReduxProvider } from '@/shared/lib/redux-provider';
import { StyledComponentsRegistry } from '@/shared/lib/registry';

export const Providers = ({ children }: { children: React.ReactNode }) => (
    <ReduxProvider>
        <StyledComponentsRegistry>
            <AuthWrapper>
                {children}
            </AuthWrapper>
            <ToastContainer/>
        </StyledComponentsRegistry>
    </ReduxProvider>
);
