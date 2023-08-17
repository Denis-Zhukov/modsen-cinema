import styled from 'styled-components';

import { Colors } from '@/shared/constants/Colors';

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const StyledYearText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 300;
  color: ${Colors.WHITE};
  padding: 20px;
`;
