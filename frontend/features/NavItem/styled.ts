'use client';

import Link from 'next/link';
import styled, { css } from 'styled-components';

export const StyledNavItem = styled(Link)<{ active?: boolean }>`
  font-weight: 300;
  font-size: 24px;
  text-decoration: none;
  color: #FFFFFF;
  border-bottom: 2px solid transparent;

  ${({ active }) => active && css`
    border-bottom-color: #D98639;
  `}
`;
