'use client';

import { useLocale, useTranslations } from 'next-intl';
import {
    useCallback, useEffect, useMemo, useState,
} from 'react';
import { nunitoSansFont, poppinsFont } from '@/shared/lib/fonts';

import { DayPicker } from '@/entities/films/ui/DayPicker';
import { Seats, Times } from '@/features/films';
import { Colors } from '@/shared/config/constants/Colors';
import { Notice } from '@/shared/config/constants/Notice';
import { DateTimeUtils } from '@/shared/lib/utils/DateTimeUtils';
import { TextUtils } from '@/shared/lib/utils/TextUtils';
import { toastError, toastSuccess } from '@/shared/lib/utils/toast';
import { useBookMutation } from '@/shared/model/store/rtk/booking.rtk';
import { useGetScheduleByMonthDayQuery } from '@/shared/model/store/rtk/film.rtk';
import { Button } from '@/shared/ui/Button';
import { Divider } from '@/shared/ui/Divider';
import {
    StyledBooking,
    StyledPrice,
    StyledSeatsInfo,
    StyledSelectionDetails, StyledTitle, StyledWrapper,
} from '@/widgets/films/ui/BookingBlock/styled';

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

    const locale = useLocale();
    const t = useTranslations('bookingBlock');

    let seatText = '';
    if (locale === 'en' && seats.length > 1) {
        seatText = t('seats');
    } else if (locale === 'en') {
        seatText = t('seat');
    } else if (locale === 'ru') {
        seatText = t('seats') + TextUtils.getEndingWordByPlural(seats.length);
    }

    return (
        <StyledWrapper className={poppinsFont.className}>
            <Divider $color={Colors.ORANGE}/>
            <StyledTitle className={nunitoSansFont.className}>{t('title')}</StyledTitle>
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
                    <StyledSeatsInfo>{seats.length} {seatText}</StyledSeatsInfo>
                    <StyledPrice>{Math.floor(price * seats.length * 100) / 100} $</StyledPrice>
                </StyledSelectionDetails>
                <Button onClick={handleBook}>{t('bookNow')}</Button>
            </StyledBooking>

            <Divider $color={Colors.ORANGE}/>
        </StyledWrapper>
    );
};
