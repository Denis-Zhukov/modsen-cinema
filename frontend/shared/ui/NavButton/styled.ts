import Link from 'next/link';
import styled, { css } from 'styled-components';

import { Colors } from '@/shared/config/constants/Colors';
import { Theme } from '@/application/Themes';

import { VariantButton } from './types';

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

export const StyledNavButton = styled(Link)<Theme & { $variant?: VariantButton }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 300;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  text-decoration: none;
  border-radius: 10px;
  ${({ $variant }) => css`${styles[$variant!] ?? styles.primary}`}
`;
