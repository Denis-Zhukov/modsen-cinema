import { Roboto } from 'next/font/google';
import { Header } from 'widgets/ui/Header';

import { StyledComponentsRegistry } from '@/shared/lib/registry';

const robotoFont = Roboto({
    subsets: ['latin'],
    weight: ['300', '500'],
});

export const Layout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body className={robotoFont.className}>
            <StyledComponentsRegistry>
                <Header />
                {children}
            </StyledComponentsRegistry>
        </body>
    </html>
);
