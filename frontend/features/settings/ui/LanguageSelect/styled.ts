'use client';

import Link from 'next-intl/link';
import styled from 'styled-components';

import type { Theme } from '@/shared/config/constants/Themes';

export const StyledLanguageSelect = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledLanguage = styled(Link)<Theme>`
  color: ${({ theme: { text: { main } } }) => main};
  background: ${({ theme: { background } }) => background};
  border: 1px solid ${({ theme: { line } }) => line};
  text-decoration: none;
  padding: 6px;
  border-radius: 10px;
`;
