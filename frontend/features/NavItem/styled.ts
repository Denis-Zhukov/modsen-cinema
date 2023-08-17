'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { Colors } from '@/shared/constants/Colors';

export const StyledNavItem = styled(Link)<{ $active?: boolean }>`
  color: ${Colors.WHITE};
  font-size: 24px;
  font-weight: 300;
  text-decoration: none;

  border-bottom: 2px solid ${({ $active }) => ($active ? Colors.ORANGE : Colors.TRANSPARENT)}
`;
