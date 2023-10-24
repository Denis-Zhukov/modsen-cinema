import type { ButtonHTMLAttributes, ReactNode } from 'react';
import React from 'react';

import type { Theme } from '@/application/Themes';

import { StyledButtonIcon } from './styled';

type Props = {
    start?: ReactNode;
    end?: ReactNode;
    children: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
    Partial<Theme>;

export const ButtonIcon = ({ start, end, children, ...props }: Props) => (
    <StyledButtonIcon {...props}>
        {start}
        <span>{children}</span>
        {end}
    </StyledButtonIcon>
);
