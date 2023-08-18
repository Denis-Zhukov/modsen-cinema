'use client';

import styled from 'styled-components';

import { Theme } from '@/shared/constants/themes';

export const StyledShowNow = styled.div`
  display: flex;
  max-width: 1340px;
  margin: 0 auto;
  gap: 75px;
`;

export const StyledTextBlock = styled.div<Theme>`
  color: ${({ theme: { text: { main } } }) => main};
  font-weight: 300;
  width: 50%;
  z-index: 999;

  h2 {
    font-size: 48px;
    text-transform: uppercase;
    color: ${({ theme: { text: { main } } }) => main};
    font-weight: 300;
  }

  p {
    font-size: 40px;
    text-shadow: 10px 4px 4px rgba(0, 0, 0, 0.25);
    font-style: italic;
    font-weight: 300;
  }

  p, h2 {
    font-style: italic;
  }
`;
