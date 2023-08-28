'use client';

import Image from 'next/image';
import styled from 'styled-components';

import { Theme } from '@/shared/constants/themes';

export const StyledFooterWrapper = styled.div<Theme>`
  background: ${({ theme: { background } }) => background};
`;

export const StyledFooter = styled.div`
  display: grid;
  grid-template-columns:  1fr 1fr 1fr 1fr auto;

  margin: 0 auto;
  justify-content: space-between;
  padding: 40px;
  max-width: 1330px;
  gap: 30px;

  > *:nth-last-child(1) {
  }

  @media screen and (max-width: 1030px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    > *:nth-last-child(1) {
      grid-column: 2/4;
    }
  }

  @media screen and (max-width: 913px) {
    > *:nth-last-child(1) {
      grid-column: 1/3;
      margin: 0 auto;
    }
  }
`;

export const StyledLogo = styled(Image)<Theme>`
  filter: drop-shadow(0 0 10px black);
`;

export const StyledColumn = styled.div<Theme>`
  display: flex;
  flex-direction: column;

  h2, a {
    color: ${({ theme: { text: { main } } }) => main};
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  a {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
  }
`;
