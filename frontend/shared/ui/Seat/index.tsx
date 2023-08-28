import { StyledSeat } from '@/shared/ui/Seat/styled';
import { SeatType } from '@/shared/ui/Seat/type';

type Props = {
    type: SeatType,
    onClick?: () => void
};

export const Seat = ({ type, onClick }: Props) => <StyledSeat $type={type} onClick={onClick}/>;
