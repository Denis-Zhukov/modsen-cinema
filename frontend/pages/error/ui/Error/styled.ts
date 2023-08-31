'use client';

import styled from 'styled-components';

import { Theme } from '@/shared/config/constants/Themes';

export const StyledError = styled.div<Theme>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme: { text: { main } } }) => main};

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 36px;
  }
`;
