'use client';

import styled from 'styled-components';

import { Theme } from '@/application/Themes';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledBooking = styled.div`
  display: flex;
  justify-content: center;
  gap: 45px;
`;

export const StyledSelectionDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSeatsInfo = styled.span<Theme>`
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 23px;
  font-weight: 400;
`;

export const StyledPrice = styled.span`
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 35px;
  font-weight: 700;
  line-height: normal;
`;

export const StyledTitle = styled.h2`
  color: #BDBDBD !important;
  font-size: 48px;
  font-weight: 700;
`;
