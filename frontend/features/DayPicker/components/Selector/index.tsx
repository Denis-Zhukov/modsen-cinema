'use client';

import React, { useCallback, useMemo } from 'react';

import { Day } from '@/features/DayPicker/components/Selector/Day';
import {
    StyledArrow, StyledItemsBlock,
    StyledSlider,
} from '@/features/DayPicker/components/Selector/styled';
import { MathUtils } from '@/shared/lib/utils/MathUtils';

import Arrow from './images/arrow.png';

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
        setActive((prev) => ((prev - 1) < 0 ? items.length - 1 : prev - 1));
    }, [items.length, setActive]);

    const moveRight = useCallback(() => {
        setActive((prev) => (prev + 1) % items.length);
    }, [items.length, setActive]);

    const days = useMemo(() => MathUtils.generateCyclesItems(items, active, 5), [active, items]);

    return (
        <StyledSlider>
            <StyledArrow
                src={Arrow.src}
                $degree={90}
                alt="left"
                onClick={moveLeft}
                whileTap={{ scale: 0.9 }}
                $left
            />
            <StyledItemsBlock>
                {days.map((day, i) => <Day key={day} order={i - 2}>{day}</Day>)}
            </StyledItemsBlock>
            <StyledArrow
                src={Arrow.src}
                $degree={-90}
                alt="right"
                whileTap={{ scale: 0.9 }}
                onClick={moveRight}
            />
        </StyledSlider>
    );
};
