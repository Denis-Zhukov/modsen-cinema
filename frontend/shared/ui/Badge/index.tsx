import React from 'react';

import { StyledBadge } from './styled';

type Props = {
    children: string
};

export const Badge = ({ children }: Props) => (
    <StyledBadge>{children}</StyledBadge>
);
