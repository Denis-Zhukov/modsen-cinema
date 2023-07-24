import type { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styled';
import type { TVariantButton } from './types';

export const Button = ({ children, variant, ...props }: {
    children: string,
    variant?: TVariantButton
} & ButtonHTMLAttributes<HTMLButtonElement>) => (
    <StyledButton type="button" variant={variant} {...props}>{children}</StyledButton>
);

Button.defaultProps = {
    variant: 'primary',
};
