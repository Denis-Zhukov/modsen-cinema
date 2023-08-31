import { usePathname } from 'next/navigation';

import { scale } from '@/shared/lib/animations/scale';
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
            variants={scale}
            initial="normal"
            whileHover="increase"
            whileTap="decrease"
            href={path}
            $active={pathname === path}
            className={poppinsFont.className}
        >
            {children}
        </StyledNavItem>
    );
};
