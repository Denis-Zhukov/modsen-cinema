'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
  color: ${({ theme: { text: { main } } }) => main};

  span {
    text-decoration: underline;
    margin-right: 25px;
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

  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));

    > img {
      width: 100%
    }
  }
`;

export const StyledInfo = styled(motion.div)`
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

export const StyledBookingBlock = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap-reverse;
  width: auto;
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

  @media screen and (max-width: 512px){
    justify-content: center;
  }
`;

export const StyledDescription = styled.div`
  font-size: 32px;
  font-weight: 300;
`;

export const MImage = motion(styled(Image)`
`);

export const MLink = motion(styled(Link)`
  > * {
    color: ${({ theme: { text: { main } } }) => main};
  }
`);
