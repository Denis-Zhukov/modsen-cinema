import { Roboto } from 'next/font/google';
import { StyledComponentsRegistry } from 'shared/lib/registry';

const robotoFont = Roboto({
    subsets: ['latin'],
    weight: '500',
});

export const Layout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body className={robotoFont.className}>
            <StyledComponentsRegistry>
                {children}
            </StyledComponentsRegistry>
        </body>
    </html>
);
