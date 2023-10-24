import type { BaseHTMLAttributes } from 'react';
import React from 'react';

import type { Theme } from '@/application/Themes';

import { StyledBadge } from './styled';

type Props = { children: string } & BaseHTMLAttributes<HTMLDivElement> &
    Partial<Theme>;

export const Badge = ({ children, ...props }: Props) => (
    <StyledBadge {...props}>{children}</StyledBadge>
);
