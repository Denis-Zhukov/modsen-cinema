import { motion } from 'framer-motion';
import type { AnchorHTMLAttributes, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import { StyledNavButton } from './styled';
import type { VariantButton } from './types';

type Props = {
    path: string,
    variant?: VariantButton
    children: string,
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavButton = forwardRef(({
    path,
    variant = 'primary',
    children,
    ...props
}: Props, ref: ForwardedRef<HTMLAnchorElement>) => (
    <StyledNavButton
        ref={ref}
        href={path}
        $variant={variant}
        {...props}
    >{children}
    </StyledNavButton>
));

export const MNavButton = motion(NavButton);
