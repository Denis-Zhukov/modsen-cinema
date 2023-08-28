'use client';

import styled from 'styled-components';

import type { Theme } from '@/shared/config/constants/Themes';

export const StyledSettingsForm = styled.div`
    display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledRow = styled.div<Theme>`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 24px;
  color: ${({ theme: { text: { main } } }) => main};
  transition: color .3s ease-in-out;
`;
