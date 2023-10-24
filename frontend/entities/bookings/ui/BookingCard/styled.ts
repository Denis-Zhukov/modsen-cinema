'use client';

import styled from 'styled-components';

import { Colors } from '@/shared/config/constants/Colors';

export const StyledTitle = styled.h3`
  color: ${Colors.WHITE};
  font-size: 26.455px;
  font-weight: 700;
  padding: 0;
  margin: 0 0 14.55px 0;
  max-width: calc(100% - 65px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const StyledRating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${Colors.WHITE};
  font-size: 24px;
  font-weight: 700;
  
  svg{
    font-size: 26px;
    color: #DBA758;
  }
`;

export const StyledSubtitle = styled.p`
  color: ${Colors.WHITE};
  font-size: 21px;
  font-weight: 300;
  padding: 0;
  margin: 0;
`;

export const StyledDownWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;

  > *:nth-child(1) {
    grid-row: 1 / 2;
  }

  > *:nth-child(2) {
    grid-row: 2 / 3;
  }

  > *:nth-child(3) {
    grid-column: 2 / 3;
    grid-row: 1 / span 2;
    align-self: center;
    justify-self: flex-end;
  }
`;

export const StyledText = styled.p`
  color: ${Colors.WHITE};
  font-size: 17.273px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export const StyledSubtext = styled.p`
  color: ${Colors.WHITE};
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  padding: 0;
  margin: 0;
`;
