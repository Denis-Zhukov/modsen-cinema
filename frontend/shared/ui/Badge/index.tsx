import type { BaseHTMLAttributes } from 'react';
import React from 'react';

import { StyledBadge } from './styled';

type Props = { children: string } & BaseHTMLAttributes<HTMLDivElement>;

export const Badge = ({
    children,
    ...props
}: Props) => (
    <StyledBadge {...props}>{children}</StyledBadge>
);
