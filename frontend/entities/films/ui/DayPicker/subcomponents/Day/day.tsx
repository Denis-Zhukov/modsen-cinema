import React from 'react';

import { fade } from '@/shared/lib/animations/fade';

import { StyledItem } from './styled';

type Props = { children: string | number, order: number };

export const Day = ({
    children: day,
    order,
}: Props) => (
    <StyledItem
        key={day}
        layout
        variants={fade}
        initial="hidden"
        animate="visible"
        exit="hidden"
        $order={order}
    >
        {day}
    </StyledItem>
);
