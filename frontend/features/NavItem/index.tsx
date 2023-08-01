'use client';

import { usePathname } from 'next/navigation';

import { StyledNavItem } from './styled';

export const NavItem = ({
    path,
    children,
}: {
    path: string,
    children: string,
}) => {
    const pathname = usePathname();
    return (
        <StyledNavItem
            href={path}
            active={pathname === path ? 'true' : 'false'}
        >
            {children}
        </StyledNavItem>
    );
};
