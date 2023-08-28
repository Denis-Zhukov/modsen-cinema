import styled, { css, RuleSet } from 'styled-components';

import { SeatType } from './type';

const styles: Record<SeatType, RuleSet> = {
    available: css`
      background: transparent;
      border: 2.5px solid #787878;
    `,
    reserved: css`
      border: 2.5px solid #C4C4C4;
      background: #C4C4C4;
    `,
    selected: css`
      border: 2.5px solid #D98639;
      background: #D98639;
    `,
};

export const StyledSeat = styled.div<{ $type: SeatType }>`
  width: 45px;
  height: 45px;
  border-radius: 8px;

  ${({ $type }) => styles[$type]}
`;
