import { AnimatePresence } from 'framer-motion';
import React, { useCallback } from 'react';

import { StyledText, StyledTimes } from '@/features/Times/styled';
import { ScheduleCard } from '@/shared/ui/Time/ScheduleCard';

type Props = {
    items: { id: number, dateAndTime: string }[]
    onSelect: (id: number | null) => void
    selectedId: number | null,
};

export const Times = ({
    items,
    onSelect,
    selectedId,
}: Props) => {
    const handleClick = useCallback((id: number) => () => onSelect(id), [onSelect]);

    if (!items.length) return <StyledText initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>This movie is not available for this day</StyledText>;

    return (
        <StyledTimes>
            <AnimatePresence mode="wait">
                {items?.map(({
                    dateAndTime,
                    id,
                }) => (
                    <ScheduleCard
                        key={id}
                        dateAndTime={dateAndTime}
                        onClick={handleClick(id)}
                        active={id === selectedId}
                    />
                ))}
            </AnimatePresence>
        </StyledTimes>
    );
};
