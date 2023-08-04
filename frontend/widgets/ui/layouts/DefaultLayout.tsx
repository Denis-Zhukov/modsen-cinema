import { StyledComponentsRegistry } from '@/shared/lib/registry';

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body style={{ background: '#1E1F27' }}>
            <StyledComponentsRegistry>
                {children}
            </StyledComponentsRegistry>
        </body>
    </html>
);
