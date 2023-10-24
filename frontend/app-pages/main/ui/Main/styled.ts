'use client';

import styled from 'styled-components';

import { Theme } from '@/application/Themes';

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  transition: background-color .5s ease-in-out;
  background: ${({ theme: { background } }) => background};
`;

export const StyledYearText = styled.div<Theme>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 300;
  color: ${({ theme: { text: { main } } }) => main};
  padding: 20px;
`;
