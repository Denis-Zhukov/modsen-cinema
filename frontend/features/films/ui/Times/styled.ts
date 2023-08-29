'use client';

import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { Theme } from '@/shared/config/constants/Themes';

export const StyledTimes = styled(AnimatePresence)`
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 0 auto;
`;

export const StyledText = styled(motion.div)<Theme>`
  display: flex;
  justify-content: center;
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 32px;
  grid-column: 1/4;
`;
