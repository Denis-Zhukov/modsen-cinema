'use client';

import styled from 'styled-components';

import { Theme } from '@/shared/config/constants/Themes';

export const StyledThemeButton = styled.div<Theme>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 48px;
  cursor: pointer;
`;
