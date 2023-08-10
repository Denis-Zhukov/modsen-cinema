import styled, { css } from 'styled-components';

import type { TVariantButton } from '@/shared/ui/Button/types';

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

export const StyledButton = styled.button<{ $variant?: TVariantButton }>`
  color: #FFF;
  font-size: 24px;
  font-weight: 300;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  ${({ $variant }) => css`${styles[$variant!] ?? styles.primary}`}
`;
