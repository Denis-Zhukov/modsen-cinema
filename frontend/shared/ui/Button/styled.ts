import styled, { css } from 'styled-components';

import type { Theme } from '@/application/Themes';

import type { VariantButton } from './types';

const styles: Record<VariantButton, string> = {
    primary: `
        background: #D98639;
        color: white;
    `,
    secondary: `
        background: white;
        color: black;
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
    ${({ $variant }) => css`
        ${styles[$variant!] ?? styles.primary}
    `}
    transition: all ease-in-out .15s;

    &:hover {
        color: #e3e3e3;
    }

    &:active {
        transform: scale(1.05);
    }
`;
