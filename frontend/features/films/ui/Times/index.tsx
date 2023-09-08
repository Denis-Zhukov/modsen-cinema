'use client';

import { AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React, { useCallback } from 'react';

import { ScheduleCard } from '@/entities/films';
import { fade } from '@/shared/lib/animations/fade';

import { StyledText, StyledTimes } from './styled';

type Props = {
    items: { id: number, dateAndTime: string, available: number }[]
    onSelect: (id: number | null) => void
    selectedId: number | null,
};

export const Times = ({
    items,
    onSelect,
    selectedId,
}: Props) => {
    const handleClick = useCallback((id: number) => () => onSelect(id), [onSelect]);
    const t = useTranslations('times');

    return (
        <StyledTimes >
            <AnimatePresence mode="wait">
                {items.length > 0 ? items?.map(({
                    dateAndTime,
                    id,
                    available,
                }) => (
                    <ScheduleCard
                        available={available}
                        key={id}
                        dateAndTime={dateAndTime}
                        onClick={handleClick(id)}
                        active={id === selectedId}
                    />
                )) : (
                    <StyledText
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        custom={0.1}
                    >{t('notAvailable')}
                    </StyledText>
                )}
            </AnimatePresence>
        </StyledTimes>
    );
};
