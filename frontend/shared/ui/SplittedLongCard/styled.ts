'use client';

import styled from 'styled-components';

import { Colors } from '@/shared/constants/Colors';
import { Theme } from '@/shared/constants/themes';

export const StyledLongCard = styled.div<Theme>`
  display: flex;
  flex-direction: row;
  background: rgba(118, 118, 120, 0.90);
  border-radius: 18px;
  width: min(500px, 100%);
  color: ${({ theme: { text: { main } } }) => main};
  position: relative;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    min-width: 0;
  }

  img {
    border-radius: 17.6px;
    object-fit: cover;

    @media screen and (max-width: 550px) {
      width: 100%;
      flex-direction: column;
      min-width: 0;
    }
  }
`;

export const StyledTitle = styled.h3`
  color: ${Colors.WHITE};
  padding: 0;
  margin: 0;
  font-size: 26.5px;
  font-weight: 700;
`;

export const StyledInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 30px);
  padding: 15px;
`;

export const StyledDivider = styled.div`
  height: 2px;
  border-radius: 17.273px;
  background: #D9D9D9;
  margin: 8px 0;
`;

export const StyledEdge = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
`;
