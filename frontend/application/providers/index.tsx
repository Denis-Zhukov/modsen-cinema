'use client';

import type { ReactNode } from 'react';

import { AuthProvider } from '@/application/providers/subproviders/AuthProvider';
import { ReduxProvider } from '@/application/providers/subproviders/ReduxProvider';
import { StyleProvider } from '@/application/providers/subproviders/StyleProvider';
import { ThemeProvider } from '@/application/providers/subproviders/ThemeProvider';

type Props = { children: ReactNode };

export const Providers = ({
    children,
}: Props) => (
    <ReduxProvider>
        <AuthProvider>
            <ThemeProvider>
                <StyleProvider>
                    {children}
                </StyleProvider>
            </ThemeProvider>
        </AuthProvider>
    </ReduxProvider>
);
