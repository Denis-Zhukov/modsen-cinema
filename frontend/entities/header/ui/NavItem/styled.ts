'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

import { Colors } from '@/shared/config/constants/Colors';
import { Theme } from '@/application/Themes';

export const StyledNavItem = styled(motion(Link))<{ $active?: boolean } & Theme>`
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 24px;
  font-weight: 300;
  text-decoration: none;

  border-bottom: 2px solid ${({ $active }) => ($active ? Colors.ORANGE : Colors.TRANSPARENT)}
`;
