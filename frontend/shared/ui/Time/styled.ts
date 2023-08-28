'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Colors } from '@/shared/constants/Colors';
import { Theme } from '@/shared/constants/themes';

export const StyledScheduleCard = styled(motion.div)<Theme & { $active?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 224px;
  height: 100px;
  border-radius: 20px;
  border: 4px solid ${({ $active }) => ($active ? '#D98639' : Colors.TRANSPARENT)};

  background: rgba(90, 90, 92, 0.80);
  padding: 16px 20px;

  h3, h4 {
    color: ${({ theme: { text: { main } } }) => main};
    font-size: 20px;
    padding: 0;
    margin: 0;
  }

  h3 {
    font-weight: 600;
  }

  h4 {
    font-weight: 400;
  }
`;

export const StyledSeats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: ${({ theme: { text: { main } } }) => main};
`;
