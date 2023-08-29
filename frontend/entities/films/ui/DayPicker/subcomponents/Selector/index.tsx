'use client';

import React, { useCallback, useMemo } from 'react';

import { MathUtils } from '@/shared/lib/utils/MathUtils';

import { Day } from '../Day/day';
import Arrow from './images/arrow.png';
import {
    StyledArrow, StyledItemsBlock,
    StyledSlider,
} from './styled';

type Props = {
    items: number[],
    active: number,
    setActive: React.Dispatch<React.SetStateAction<number>>
};

export const Selector = ({
    items,
    active,
    setActive,
}: Props) => {
    const moveLeft = useCallback(() => {
        setActive((prev) => (prev + 1) % items.length);
    }, [items, setActive]);

    const moveRight = useCallback(() => {
        setActive((prev) => ((prev - 1) < 0 ? items.length - 1 : prev - 1));
    }, [items, setActive]);

    const days = useMemo(() => MathUtils.generateCyclesItems(items, active, 5), [active, items]);

    return (
        <StyledSlider>
            <StyledArrow
                src={Arrow.src}
                $degree={90}
                alt="left"
                onClick={moveLeft}
                $left
            />
            <StyledItemsBlock>
                {days.map((day, i) => <Day key={day} order={i - 2}>{day}</Day>)}
            </StyledItemsBlock>
            <StyledArrow
                src={Arrow.src}
                $degree={-90}
                alt="right"
                onClick={moveRight}
            />
        </StyledSlider>
    );
};
