import React from 'react';

import { StyledBadge } from '@/shared/ui/Badge/styled';

type Props = {
    children: string
};

export const Badge = ({ children }: Props) => (
    <StyledBadge>{children}</StyledBadge>
);
