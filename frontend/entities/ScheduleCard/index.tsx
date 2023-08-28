import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useMemo } from 'react';

import { fade } from '@/shared/lib/animations/fade';
import { poppinsFont } from '@/shared/lib/fonts';
import { DateTimeUtils } from '@/shared/lib/utils/DateTimeUtils';

import ReclinerIcon from './images/recliner.png';
import { StyledScheduleCard, StyledSeats } from './styled';

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
    const locale = useLocale();
    const time = useMemo(() => DateTimeUtils.dateAndTimeStringToTime(dateAndTime, locale), [dateAndTime, locale]);

    return (
        <StyledScheduleCard
            className={poppinsFont.className}
            $active={active}
            variants={fade}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClick}
        >
            <h3>{time}</h3>
            <h4>Cinema: 1D</h4>
            <StyledSeats>
                <Image src={ReclinerIcon} alt="recliner-icon" width={26} height={30}/>
                000 seats available
            </StyledSeats>
        </StyledScheduleCard>
    );
};
