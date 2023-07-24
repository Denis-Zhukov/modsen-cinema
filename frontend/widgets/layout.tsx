import { StyledComponentsRegistry } from 'shared/lib/registry';

export const Layout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
    </html>
);
