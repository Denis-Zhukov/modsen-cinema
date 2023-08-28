'use client';

import styled from 'styled-components';

import type { Theme } from '@/shared/constants/themes';

export const StyledSettingsForm = styled.div`
`;

export const StyledRow = styled.div<Theme>`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 24px;
  color: ${({ theme: { text: { main } } }) => main};
  transition: color .3s ease-in-out;
`;
