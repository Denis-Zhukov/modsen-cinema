'use client';

import { Times } from 'features/Times';
import {
    useCallback, useEffect, useMemo, useState,
} from 'react';

import { DayPicker } from '@/features/DayPicker';
import { Seats } from '@/features/Seats';
import { nunitoSansFont, poppinsFont } from '@/shared/fonts';
import { DateTimeUtils } from '@/shared/lib/DateTimeUtils';
import { toastError, toastSuccess } from '@/shared/lib/toast';
import { useBookMutation } from '@/shared/store/rtk/booking.rtk';
import { useGetScheduleByMonthDayQuery } from '@/shared/store/rtk/film.rtk';
import { Notice } from '@/shared/typing/constants/Notice';
import { Button } from '@/shared/ui/Button';
import { Divider } from '@/shared/ui/Divider';
import {
    StyledBooking,
    StyledPrice,
    StyledSeatsInfo,
    StyledSelectionDetails, StyledTitle, StyledWrapper,
} from '@/widgets/ui/BookingBlock/styled';

type Props = {
    filmId: number,
};

export const BookingBlock = ({
    filmId,
}: Props) => {
    const [activeIndexDay, setActiveIndexDay] = useState(0);
    const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(null);

    const daysAndMonths = useMemo(() => DateTimeUtils.getNextDays(7), []);
    const onlyDays = useMemo(() => daysAndMonths.map(({ day }) => day), [daysAndMonths]);
    const [price, setPrice] = useState(0);

    const { data } = useGetScheduleByMonthDayQuery({
        day: daysAndMonths[activeIndexDay].day,
        month: daysAndMonths[activeIndexDay].month,
        filmId,
    }, { refetchOnMountOrArgChange: true });

    const [seats, setSeats] = useState<number[]>([]);

    const [book, {
        isSuccess,
        error,
    }] = useBookMutation();

    const handleBook = useCallback(() => {
        if (selectedScheduleId) {
            book({
                scheduleId: selectedScheduleId,
                seatIds: seats,
            });
        }
    }, [book, seats, selectedScheduleId]);

    useEffect(() => {
        if (isSuccess) {
            toastSuccess(Notice.SEATS_BOOKED);
            setSeats([]);
        } else if (error) toastError(error as string);
    }, [error, isSuccess]);

    return (
        <StyledWrapper className={poppinsFont.className}>
            <Divider/>
            <StyledTitle className={nunitoSansFont.className}>Book Now!</StyledTitle>
            <DayPicker days={onlyDays} activeDay={activeIndexDay} setActiveDay={setActiveIndexDay}/>
            <Times
                items={data ?? []}
                onSelect={(id) => setSelectedScheduleId(id)}
                selectedId={selectedScheduleId}
            />
            <Seats
                scheduleId={selectedScheduleId}
                selected={seats}
                setSelected={setSeats}
                setPrice={setPrice}
            />
            <StyledBooking>
                <StyledSelectionDetails className={poppinsFont.className}>
                    <StyledSeatsInfo>{seats.length} {seats.length === 1 ? 'Seat' : 'Seats'}</StyledSeatsInfo>
                    <StyledPrice>{Math.floor(price * seats.length * 100) / 100} $</StyledPrice>
                </StyledSelectionDetails>
                <Button onClick={handleBook}>Book Now</Button>
            </StyledBooking>

            <Divider/>
        </StyledWrapper>
    );
};
