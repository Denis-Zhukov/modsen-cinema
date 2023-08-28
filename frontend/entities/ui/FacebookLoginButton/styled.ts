import styled from 'styled-components';

import { Colors } from '@/shared/constants/Colors';

export const StyledFacebookLoginButton = styled.button`
  display: flex;
  gap: 35px;
  align-items: center;
  border-radius: 10px;
  background: #1877F2;
  outline: none;
  border: none;
  color: ${Colors.WHITE};
  font-size: 14px;
  font-weight: 600;

  svg {
    font-size: 24px;
  }
`;
