import { Selector } from 'features/DayPicker/components/Selector';
import React from 'react';

import {
    StyledDayPicker, StyledDays, StyledLine,
} from '@/features/DayPicker/styled';

type Props = {
    days: number[],
    activeDay: number,
    setActiveDay: React.Dispatch<React.SetStateAction<number>>
};

export const DayPicker = ({ days, activeDay, setActiveDay }: Props) => (
    <StyledDayPicker>
        <StyledLine/>
        <StyledDays>
            <Selector items={days} active={activeDay} setActive={setActiveDay}/>
        </StyledDays>
        <StyledLine/>
    </StyledDayPicker>
);
