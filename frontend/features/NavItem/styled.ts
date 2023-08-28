'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { Colors } from '@/shared/config/constants/Colors';
import { Theme } from '@/shared/config/constants/Themes';

export const StyledNavItem = styled(Link)<{ $active?: boolean } & Theme>`
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 24px;
  font-weight: 300;
  text-decoration: none;

  border-bottom: 2px solid ${({ $active }) => ($active ? Colors.ORANGE : Colors.TRANSPARENT)}
`;
