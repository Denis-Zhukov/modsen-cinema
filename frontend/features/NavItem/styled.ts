'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const StyledNavItem = styled(Link)<{ active?: string }>`
  font-weight: 300;
  font-size: 24px;
  text-decoration: none;
  color: #FFFFFF;
  border-bottom: 2px solid ${({ active = 'false' }) => (active === 'true' ? '#D98639' : 'transparent')}
`;
