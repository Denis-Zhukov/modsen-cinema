'use client';

import type { TVariantButton } from 'shared/ui/Button/types';
import styled, { css } from 'styled-components';

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
  font-size: 24px;
  font-weight: 300;
  ${({ variant }) => css`${styles[variant!] ?? styles.primary}`}
`;
