'use client';

import { motion } from 'framer-motion';
import { Button, Divider } from 'monema-ui';
import { useLocale, useTranslations } from 'next-intl';
import {
    ForwardedRef,
    forwardRef,
    useCallback, useEffect, useMemo, useState,
} from 'react';

import { DayPicker } from '@/entities/films/ui/DayPicker';
import { Seats, Times } from '@/features/films';
import { Colors } from '@/shared/config/constants/Colors';
import { Forms } from '@/shared/config/constants/Forms';
import { Notice } from '@/shared/config/constants/Notice';
import { nunitoSansFont, poppinsFont } from '@/shared/lib/fonts';
import { useAppSelector } from '@/shared/lib/hooks/redux-hooks';
import { useSwitchForm } from '@/shared/lib/hooks/useSwitchForm';
import { DateTimeUtils } from '@/shared/lib/utils/DateTimeUtils';
import { TextUtils } from '@/shared/lib/utils/TextUtils';
import { toastError, toastSuccess } from '@/shared/lib/utils/ToastUtils';
import { useBookMutation } from '@/shared/model/store/rtk/booking.rtk';
import { useGetScheduleByMonthDayQuery } from '@/shared/model/store/rtk/film.rtk';
import { selectIsAuth } from '@/shared/model/store/selectors/auth.selectors';
import { Loader } from '@/shared/ui/Loader';
import {
    StyledBooking,
    StyledPrice,
    StyledSeatsInfo,
    StyledSelectionDetails, StyledTitle, StyledWrapper,
} from '@/widgets/films/ui/BookingBlock/styled';

type Props = {
    filmId: number,
};

export const BookingBlock = forwardRef((
    {
        filmId,
    }: Props,
    ref: ForwardedRef<HTMLDivElement>,
) => {
    const [activeIndexDay, setActiveIndexDay] = useState(0);
    const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(null);
    const isAuth = useAppSelector(selectIsAuth);

    const daysAndMonths = useMemo(() => DateTimeUtils.getNextDays(7), []);
    const onlyDays = useMemo(() => daysAndMonths.map(({ day }) => day), [daysAndMonths]);
    const [price, setPrice] = useState(0);

    const { data, isLoading } = useGetScheduleByMonthDayQuery({
        day: daysAndMonths[activeIndexDay].day,
        month: daysAndMonths[activeIndexDay].month,
        filmId,
    }, { refetchOnMountOrArgChange: true });

    const [seats, setSeats] = useState<number[]>([]);

    const [book, {
        isSuccess,
        error,
    }] = useBookMutation();

    const switchForm = useSwitchForm();
    const handleBook = useCallback(() => {
        if (!isAuth) {
            switchForm(Forms.LOGIN);
        } else if (selectedScheduleId) {
            book({
                scheduleId: selectedScheduleId,
                seatIds: seats,
            });
        } else {
            toastError(Notice.MUST_SELECT_DATETIME);
        }
    }, [book, seats, selectedScheduleId]);

    useEffect(() => {
        if (isSuccess) {
            toastSuccess(Notice.SEATS_BOOKED);
            setSeats([]);
        } else if (error) toastError(Notice.BOOK_FAILED);
    }, [error, isSuccess]);

    const locale = useLocale();
    const t = useTranslations('bookingBlock');

    const seatText = useMemo(() => {
        if (locale === 'en' && (seats.length > 1 || seats.length === 0)) {
            return t('seats');
        }
        if (locale === 'ru') {
            return t('seats') + TextUtils.getEndingWordByPlural(seats.length);
        }
        return t('seat');
    }, [locale, seats.length, t]);

    return (
        <StyledWrapper ref={ref} className={poppinsFont.className}>
            <Divider $color={Colors.ORANGE}/>
            <StyledTitle className={nunitoSansFont.className}>{t('title')}</StyledTitle>
            <DayPicker days={onlyDays} activeDay={activeIndexDay} setActiveDay={setActiveIndexDay}/>
            {isLoading ? <Loader color={Colors.ORANGE}/> : (
                <Times
                    items={data ?? []}
                    onSelect={(id) => setSelectedScheduleId(id)}
                    selectedId={selectedScheduleId}
                />
            )}
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
});

export const MBookingBlock = motion(BookingBlock);
