import styled, { css } from 'styled-components';

import { Colors } from '@/shared/config/constants/Colors';
import type { Theme } from '@/shared/config/constants/Themes';
import type { VariantButton } from '@/shared/ui/Button/types';

const styles: Record<VariantButton, string> = {
    primary: `
        background: ${Colors.ORANGE};
        color: ${Colors.WHITE};
    `,
    secondary: `
        background: ${Colors.WHITE};
        color: ${Colors.BLACK};
    `,
};

export const StyledButton = styled.button<Theme & { $variant?: VariantButton }>`
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
