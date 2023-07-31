import { Header } from 'widgets/ui/Header';

import { StyledComponentsRegistry } from '@/shared/lib/registry';

export const Layout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body style={{ background: '#1E1F27' }}>
            <StyledComponentsRegistry>
                <Header/>
                {children}
            </StyledComponentsRegistry>
        </body>
    </html>
);
