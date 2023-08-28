'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Theme } from '@/shared/constants/themes';

export const StyledTimes = styled.div`
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
`;
