'use client';

import styled from 'styled-components';

import { Colors } from '@/shared/constants/Colors';

export const StyledSeats = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  background: #313131;
  padding: 13px 50px;

  h2 {
    color: ${Colors.WHITE};
    font-size: 55px;
    font-weight: 400;
  }
`;

export const StyledNotice = styled.div`
  display: flex;
  gap: 45px;
  color: ${Colors.WHITE};

  div {
    display: flex;
    align-items: center;
    gap: 9.3px;
  }
`;

export const StyledPositions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 32px;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
