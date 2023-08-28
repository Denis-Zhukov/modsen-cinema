import type { BaseHTMLAttributes } from 'react';

import { StyledSeat } from './styled';
import type { SeatType } from './type';

type Props = {
    type: SeatType,
} & BaseHTMLAttributes<HTMLDivElement>
    ;

export const Seat = ({
    type,
    ...props
}: Props) => <StyledSeat $type={type} {...props}/>;
