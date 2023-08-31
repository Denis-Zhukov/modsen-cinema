'use client';

import styled from 'styled-components';

import { Theme } from '@/shared/config/constants/Themes';

export const OutWrapper = styled.div<Theme>`
  background: ${({ theme: { background } }) => background};
  transition: background-color .5s ease-in-out, color .5s ease-in-out;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1750px;
  margin: 0 auto;
  
  @media screen and (max-width: 1800px){
    padding: 16px;
  }
`;
