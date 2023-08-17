'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { Colors } from '@/shared/constants/Colors';

export const StyledFilmInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1530px;
  margin: 0 auto;
  color: ${Colors.WHITE};
  gap: 35px;
`;

export const StyledTopBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    font-size: 48px;
    font-weight: 300;
  }
`;

export const StyledNextFilm = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 36px;
  gap: 25px;
  color: ${Colors.WHITE};

  span {
    text-decoration: underline;
  }

  img {
    width: 65px;
    object-fit: contain;
  }
`;

export const StyledInfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > div {
    font-size: 32px;
    font-weight: 300;

    > span {
      font-weight: 900;
    }
  }
`;

export const StyledBookingBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;
  margin-top: 10px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-size: 48px;
    font-weight: 900;
  }
`;

export const StyledDescription = styled.div`
  font-size: 32px;
  font-weight: 300;
`;
