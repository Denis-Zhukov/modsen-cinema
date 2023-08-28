'use client';

import { usePathname } from 'next/navigation';

import { poppinsFont } from 'shared/lib/fonts';

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
            $active={pathname === path}
            className={poppinsFont.className}
        >
            {children}
        </StyledNavItem>
    );
};
