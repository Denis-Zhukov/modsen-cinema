'use client';

import Image from 'next/image';
import styled from 'styled-components';

import { Theme } from '@/shared/constants/themes';

export const StyledFooterWrapper = styled.div<Theme>`
  box-shadow: inset 0 0 50px 50px ${({ theme: { type } }) => (type === 'dark' ? '#21222a' : '#deddd5')};
  background: ${({ theme: { background } }) => background};
`;

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: space-between;
  padding: 40px;
  max-width: 1332px;
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

export const StyledSubscribe = styled.div<Theme>`
  display: flex;
  flex-direction: column;
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 16px;
  font-weight: 700;
  max-width: 395px;

  input {
    color: ${({ theme: { text: { main } } }) => main};;
    padding: 12px 24px;
    border-radius: 40px;
    background: rgba(255, 255, 255, 0.15);
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  p {
    opacity: 0.4;
    color: ${({ theme: { text: { main } } }) => main};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;
