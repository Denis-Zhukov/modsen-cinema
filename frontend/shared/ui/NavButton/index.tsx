import type { AnchorHTMLAttributes } from 'react';

import { StyledNavButton } from './styled';
import type { VariantButton } from './types';

type Props = {
    path: string,
    variant?: VariantButton
    children: string,
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavButton = ({
    path,
    variant = 'primary',
    children,
    ...props
}: Props) => (
    <StyledNavButton
        href={path}
        $variant={variant}
        {...props}
    >{children}
    </StyledNavButton>
);
