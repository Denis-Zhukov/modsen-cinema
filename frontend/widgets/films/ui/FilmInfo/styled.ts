'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { Theme } from '@/shared/config/constants/Themes';

export const StyledFilmInfo = styled.div<Theme>`
  display: flex;
  flex-direction: column;
  max-width: 1530px;
  margin: 0 auto;
  color: ${({ theme: { text: { main } } }) => main};
  gap: 35px;
`;

export const StyledTopBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-between;

  h1 {
    font-size: 48px;
    font-weight: 300;
  }
`;

export const StyledNextFilm = styled(Link)<Theme>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 36px;
  gap: 25px;
  color: ${({ theme: { text: { main } } }) => main};

  span {
    text-decoration: underline;
  }

  img {
    ${({ theme: { type } }) => (type === 'light' ? 'filter: invert(100%);' : '')}
    width: 65px;
    object-fit: contain;
  }
`;

export const StyledInfoBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 15px;

  > * {
    margin: 0 auto;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > div {
    font-size: 32px;
    font-weight: 300;
    text-transform: capitalize;

    > span {
      text-transform: none;
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