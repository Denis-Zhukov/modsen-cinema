'use client';

import styled from 'styled-components';

import { Theme } from '@/shared/constants/themes';

export const StyledTrailer = styled.div<Theme>`
  display: flex;
  max-width: 1340px;
  color: ${({ theme: { text: { main } } }) => main};
  background: ${({ theme: { background } }) => background};
  margin: 0 auto;
  overflow-y: hidden;
`;

export const StyledTextBlock = styled.div<Theme>`
  box-shadow: 50px 0 50px 75px ${({ theme: { background } }) => background};;
  position: relative;
  z-index: 999;
  font-weight: 300;
  width: 40%;

  h2 {
    font-size: 48px;
    text-transform: uppercase;
    font-weight: 300;
  }

  p {
    font-size: 32px;
    text-align: justify;
    font-weight: 300;
  }
`;
