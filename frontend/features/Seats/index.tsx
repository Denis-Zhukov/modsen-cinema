'use client';

import {
    Dispatch, SetStateAction, useCallback, useEffect,
} from 'react';

import { poppinsFont } from '@/shared/fonts';
import { useGetSeatsByScheduleQuery } from '@/shared/store/rtk/seats.rtk';
import { Seat } from '@/shared/ui/Seat';
import { SeatType } from '@/shared/ui/Seat/type';

import {
    StyledNotice, StyledPositions, StyledRow, StyledSeats,
} from './styled';

type Props = {
    scheduleId: number | null,
    selected: number[],
    setSelected: Dispatch<SetStateAction<number[]>>
    setPrice: Dispatch<SetStateAction<number>>
};

export const Seats = ({
    scheduleId, selected, setSelected, setPrice,
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

    return (
        <StyledSeats className={poppinsFont.className}>
            <h2>Screen</h2>
            <StyledPositions>
                {
                    Object.keys(data?.seats ?? {})
                        .map((row: string) => (
                            <StyledRow>
                                {data?.seats[row].map(({ id, available }) => {
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
                    <Seat type="available"/> Available
                </div>
                <div>
                    <Seat type="reserved"/> Reserved
                </div>
                <div>
                    <Seat type="selected"/> Selected
                </div>
            </StyledNotice>
        </StyledSeats>
    );
};
