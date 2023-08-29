'use client';

import type { Dispatch, SetStateAction } from 'react';

import {
    StyledDayPicker, StyledDays, StyledLine,
} from './styled';
import { Selector } from './subcomponents/Selector';

type Props = {
    days: number[],
    activeDay: number,
    setActiveDay: Dispatch<SetStateAction<number>>
};

export const DayPicker = ({
    days,
    activeDay,
    setActiveDay,
}: Props) => (
    <StyledDayPicker>
        <StyledLine/>
        <StyledDays>
            <Selector items={days} active={activeDay} setActive={setActiveDay}/>
        </StyledDays>
        <StyledLine/>
    </StyledDayPicker>
);
