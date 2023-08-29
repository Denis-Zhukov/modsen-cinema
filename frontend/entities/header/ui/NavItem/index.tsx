import { usePathname } from 'next/navigation';

import { poppinsFont } from '@/shared/lib/fonts';

import { StyledNavItem } from './styled';

export const NavItem = ({
    path,
    children,
}: {
    path: string,
    children: string,
}) => {
    const pathname = usePathname()!.replace(/^\/(en|ru)\/?/i, '/');

    return (
        <StyledNavItem
            href={path}
            $active={pathname === path}
            className={poppinsFont.className}
        >
            {children}
        </StyledNavItem>
    );
};
