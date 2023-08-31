'use client';

import styled from 'styled-components';

import { Theme } from '@/shared/config/constants/Themes';
import { VideoPlayer } from '@/shared/ui/VideoPlayer';
import { motion } from "framer-motion";

export const StyledTrailer = styled.div<Theme>`
  display: grid;
  overflow-y: hidden;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  color: ${({ theme: { text: { main } } }) => main};
  background: ${({ theme: { background } }) => background};
  margin: 0 auto;

  @media screen and (max-width: 1160px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledTextBlock = styled(motion.div)<Theme>`
  box-shadow: 50px 0 50px 75px ${({ theme: { background } }) => background};;
  position: relative;
  z-index: 999;
  font-weight: 300;
  max-height: 500px;

  h2 {
    font-size: 48px;
    text-transform: uppercase;
    font-weight: 300;
  }

  p {
    font-size: 32px;
    text-align: justify;
    font-weight: 300;
  }
`;

export const StyledVideoPlayerWrapper = styled(motion.div)`
  overflow: hidden;
`;
