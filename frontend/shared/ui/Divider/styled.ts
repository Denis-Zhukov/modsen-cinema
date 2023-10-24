import styled from 'styled-components';

export const StyledDivider = styled.div<{ $color: string }>`
  width: 100%;
  height: 5px;
  border-radius: 10px;
  background: ${({ $color }) => $color};
  margin: 20px 0;
`;
