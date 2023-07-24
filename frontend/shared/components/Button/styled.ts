'use client';

import styled, { css } from 'styled-components';

import type { TVariantButton } from '@/shared/components/Button/types';

const styles: Record<TVariantButton, string> = {
    primary: `
        background: #D98639;
        color: white;
    `,
    secondary: `
        background: #FFFFFF;
        color: black;
    `,
};

export const StyledButton = styled.button<{ variant?: TVariantButton }>`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  ${({ variant }) => css`${variant ? styles[variant] : styles.primary}`}
`;
