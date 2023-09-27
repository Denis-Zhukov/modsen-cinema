'use client';

import styled from 'styled-components';

import { Theme } from '@/application/Themes';

export const StyledThemeButton = styled.div<Theme>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 48px;
  cursor: pointer;
`;
