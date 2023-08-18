import styled, { css } from 'styled-components';

import { Colors } from '@/shared/constants/Colors';
import { Theme } from '@/shared/constants/themes';
import type { TVariantButton } from '@/shared/ui/Button/types';

const styles: Record<TVariantButton, string> = {
    primary: `
        background: ${Colors.ORANGE};
        color: ${Colors.WHITE};
    `,
    secondary: `
        background: ${Colors.WHITE};
        color: ${Colors.BLACK};
    `,
};

export const StyledButton = styled.button<Theme & { $variant?: TVariantButton }>`
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
