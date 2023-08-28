import Image from 'next/image';
import { useMemo } from 'react';

import { poppinsFont } from '@/shared/fonts';
import { DateTimeUtils } from '@/shared/lib/DateTimeUtils';
import { StyledScheduleCard, StyledSeats } from '@/shared/ui/Time/styled';

import Recliner from './images/recliner.png';

type Props = {
    active?: boolean,
    dateAndTime: string
    onClick?: () => void
};

export const ScheduleCard = ({
    dateAndTime,
    active = false,
    onClick,
}: Props) => {
    const time = useMemo(() => DateTimeUtils.dateAndTimeStringToTime(dateAndTime), [dateAndTime]);

    return (
        <StyledScheduleCard
            className={poppinsFont.className}
            $active={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClick}
        >
            <h3>{time}</h3>
            <h4>Cinema: 1D</h4>
            <StyledSeats>
                <Image src={Recliner} alt="recliner-icon" width={26} height={30}/>
                25 seats available
            </StyledSeats>
        </StyledScheduleCard>
    );
};
