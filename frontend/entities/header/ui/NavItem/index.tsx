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
    // An active menu item needs to be identified. Due to localization, there may be a part of
    // the path, such as "/ru/.." or "/en/..," which could prevent this from happening.
    // Therefore, it is necessary to remove the part that determines the localization in the URL.
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
