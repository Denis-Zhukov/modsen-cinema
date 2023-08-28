import type { ButtonHTMLAttributes } from 'react';
import { poppinsFont } from 'shared/lib/fonts';

import { StyledButton } from './styled';
import type { VariantButton } from './types';

type Props = {
    children: string,
    variant?: VariantButton,
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
    children,
    variant = 'primary',
    className,
    ...props
}:Props) => (
    <StyledButton
        $variant={variant}
        className={`${poppinsFont.className} ${className}`}
        {...props}
    >
        {children}
    </StyledButton>
);
