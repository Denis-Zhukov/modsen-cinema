import React from 'react';

import { Colors } from '@/shared/constants/Colors';
import { Providers } from '@/shared/lib/Providers';

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body style={{ background: Colors.BLUE_BACKGROUND }}>
            <Providers>{children}</Providers>
        </body>
    </html>
);
