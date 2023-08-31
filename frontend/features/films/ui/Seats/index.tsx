'use client';

import { useTranslations } from 'next-intl';
import {
    Dispatch, SetStateAction, useCallback, useEffect,
} from 'react';

import { Seat } from '@/entities/films';
import type { SeatType } from '@/entities/films/ui/Seat/type';
import { poppinsFont } from '@/shared/lib/fonts';
import { useGetSeatsByScheduleQuery } from '@/shared/model/store/rtk/seats.rtk';

import {
    StyledNotice, StyledPositions, StyledRow, StyledSeats,
} from './styled';
import { log } from "next/dist/server/typescript/utils";

type Props = {
    scheduleId: number | null,
    selected: number[],
    setSelected: Dispatch<SetStateAction<number[]>>
    setPrice: Dispatch<SetStateAction<number>>
};

export const Seats = ({
    scheduleId,
    selected,
    setSelected,
    setPrice,
}: Props) => {
    const { data } = useGetSeatsByScheduleQuery({ scheduleId: scheduleId ?? 0 });

    const handleSelectSeat = useCallback((id: number) => () => {
        setSelected((prev) => {
            if (!prev.includes(id)) return prev.concat(id);
            return prev.filter((prevId) => prevId !== id);
        });
    }, [setSelected]);

    useEffect(() => {
        setPrice(data?.price ?? 0);
    }, [data?.price, setPrice]);

    useEffect(() => {
        setSelected([]);
    }, [scheduleId, setSelected]);

    const t = useTranslations('seats');

    return (
        <StyledSeats className={poppinsFont.className}>
            <h2>{t('screen')}</h2>
            <StyledPositions>
                {
                    Object.keys(data?.seats ?? {})
                        .map((row: string) => (
                            <StyledRow key={row}>
                                {data?.seats[row].map(({
                                    id,
                                    available,
                                }) => {
                                    const type: SeatType = selected.includes(id) ? 'selected' : 'available';
                                    return (
                                        <Seat
                                            onClick={available ? handleSelectSeat(id) : undefined}
                                            key={id}
                                            type={available ? type : 'reserved'}
                                        />
                                    );
                                })}
                            </StyledRow>
                        ))
                }
            </StyledPositions>
            <StyledNotice>
                <div>
                    <Seat type="available"/> {t('available')}
                </div>
                <div>
                    <Seat type="reserved"/> {t('reserved')}
                </div>
                <div>
                    <Seat type="selected"/> {t('selected')}
                </div>
            </StyledNotice>
        </StyledSeats>
    );
};
