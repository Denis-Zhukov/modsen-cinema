import styled from 'styled-components';

import { Theme } from '@/shared/constants/themes';

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  background: ${({ theme: { background } }) => background};
`;

export const StyledYearText = styled.div<Theme>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 300;
  color: ${({ theme: { color } }) => color};
  padding: 20px;
`;
