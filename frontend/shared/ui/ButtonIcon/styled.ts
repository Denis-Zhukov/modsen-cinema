import styled from 'styled-components';

import { Colors } from '@/shared/config/constants/Colors';

export const StyledButtonIcon = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 18px;
  background: ${Colors.ORANGE};
  color: ${Colors.BLACK};
  font-size: 18px;
  font-weight: 300;
  padding: 8px 14px;
  outline: none;
  border: none;
`;
