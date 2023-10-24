import type { ButtonHTMLAttributes } from 'react';
import React from 'react';

import type { Theme } from '@/application/Themes';

import { StyledButton } from './styled';
import type { VariantButton } from './types';

type Props = {
    children: string;
    variant?: VariantButton;
} & ButtonHTMLAttributes<HTMLButtonElement> &
    Partial<Theme>;

export const Button = ({ children, variant = 'primary', ...props }: Props) => (
    <StyledButton $variant={variant} {...props}>
        {children}
    </StyledButton>
);
