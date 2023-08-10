'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const StyledNavItem = styled(Link)<{ $active?: boolean }>`
  color: #FFF;
  font-size: 24px;
  font-weight: 300;
  text-decoration: none;
  
  border-bottom: 2px solid ${({ $active }) => ($active ? '#D98639' : 'transparent')}
`;
