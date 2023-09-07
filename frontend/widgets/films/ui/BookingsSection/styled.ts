'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Theme } from '@/shared/config/constants/Themes';

export const StyledTitle = styled(motion.h2)<Theme>`
  margin: 70px 0 50px 0;
  padding: 0;
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 48px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const StyledText = styled(motion.p)`
  margin: 0;
  padding: 0;
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 32px;
  font-weight: 300;
`;

export const StyledItems = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 20px;
`;
