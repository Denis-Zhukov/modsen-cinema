import styled from 'styled-components';

import { Colors } from '@/shared/config/constants/Colors';

export const StyledGoogleLoginButton = styled.button`
  display: flex;
  gap: 35px;
  align-items: center;
  border-radius: 10px;
  background: ${Colors.WHITE};
  outline: none;
  border: none;
  color: rgba(0, 0, 0, 0.55);
  font-size: 14px;
  font-weight: 600;

  svg {
    font-size: 24px;
  }
`;
