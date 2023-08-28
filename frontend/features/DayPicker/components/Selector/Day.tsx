import React from 'react';

import { StyledItem } from '@/features/DayPicker/components/Selector/styled';

type Props = { children: React.ReactNode, order: number };

export const Day = ({
    children,
    order,
}: Props) => (
    <StyledItem
        $order={order}
    >
        {children}
    </StyledItem>
);
