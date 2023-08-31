'use client';

import styled from 'styled-components';

import { Colors } from '@/shared/config/constants/Colors';
import { Theme } from '@/shared/config/constants/Themes';

export const StyledNotFound = styled.div<Theme>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;

  h1 {
    font-size: 96px;
    margin-bottom: 16px;
    color: ${Colors.ORANGE};
  }

  p {
    font-size: 1.5rem;
    color: #555;
    text-align: center;
  }
`;
