'use client';

import styled from 'styled-components';

import { Colors } from '@/shared/constants/Colors';

export const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;

  h1 {
    font-size: 6rem;
    margin-bottom: 1rem;
    color: ${Colors.ORANGE};
  }

  p {
    font-size: 1.5rem;
    color: #555;
    text-align: center;
  }
`;
