import React from 'react';
import { ToastContainer } from 'react-toastify';

import { ReduxProvider } from '@/shared/lib/redux-provider';
import { StyledComponentsRegistry } from '@/shared/lib/registry';

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body style={{ background: '#1E1F27' }}>
            <ReduxProvider>
                <StyledComponentsRegistry>
                    {children}
                    <ToastContainer/>
                </StyledComponentsRegistry>
            </ReduxProvider>
        </body>
    </html>
);
