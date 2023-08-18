import 'normalize.css';

import React from 'react';

import { Providers } from '@/shared/lib/Providers';

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body>
            <Providers>{children}</Providers>
        </body>
    </html>
);
