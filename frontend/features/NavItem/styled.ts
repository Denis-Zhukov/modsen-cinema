'use client';

import Link from 'next/link';
import styled, { css } from 'styled-components';

export const StyledNavItem = styled(Link)<{ active?: boolean }>`
  font-weight: 300;
  font-size: 24px;
  text-decoration: none;
  color: #FFFFFF;

  ${({ active }) => active && css`
    color: #D98639;
    text-decoration: underline;
  `}
`;
