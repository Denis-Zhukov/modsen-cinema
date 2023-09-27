'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsArrowDown } from 'react-icons/bs';
import styled from 'styled-components';

import { Theme } from '@/application/Themes';

export const StyledProfile = styled(motion.div)<Theme>`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 65px;
  gap: 32px;
  height: 100vh;
  overflow-x: auto;
  width: min(100vw, 350px);
  
  position: fixed;
  right: 0;
  top: 0;
  
  z-index: 9999;

  color: ${({ theme: { text: { main } } }) => main};
  background: ${({ theme: { background } }) => background};
  transition: background-color .5s ease-in-out, color .5s ease-in-out;
`;

export const StyledProfileHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 300;
  gap: 70px;
`;

export const StyledRightArrow = styled(BsArrowDown)<Theme>`
  font-size: 60px;
  transform: rotate(-90deg);
  transition: color 1s ease-in-out;
  color: ${({ theme: { text: { main } } }) => main};
  cursor: pointer;
`;

export const StyledAvatar = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

export const StyledProfileInfo = styled.div`
  display: flex;
  gap: 7px;
  flex-direction: column;
  align-items: center;
  color: ${({ theme: { text: { main } } }) => main};
  font-weight: 600;
`;

export const StyledHugeCapitalize = styled.div`
  font-size: 36px;
  text-transform: capitalize;
  color: ${({ theme: { text: { main } } }) => main};
`;

export const StyledSmallUpperCase = styled.div`
  font-size: 22px;
  text-transform: uppercase;
`;

export const StyledProfileButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;

  > * {
    text-decoration: underline;
    border: none;
    outline: none;
    background: transparent;
    
    color: ${({ theme: { text: { main } } }) => main};
    transition: color 1s ease-in-out;
    
    font-size: 36px;
    font-weight: 600;
    text-transform: capitalize;
    cursor: pointer;
  }

`;
