import styled from 'styled-components';

import { Theme } from '@/shared/constants/themes';

export const StyledThemeButton = styled.div<Theme>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 48px;
  cursor: pointer;
`;
