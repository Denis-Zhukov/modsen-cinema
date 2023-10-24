'use client';

import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { Theme } from '@/application/Themes';

export const StyledBackground = styled.div<{
    $firstColor: [number, number, number],
    $secondColor: [number, number, number]
} & Theme>`
  box-shadow: inset 0 0 60px 100px ${({
        theme: {
            type,
            background,
        },
    }) => (type === 'light' ? lighten(0.015, background) : background)};
  padding: 100px;

  ${({
        $firstColor,
        $secondColor,
    }) => (
        css`
            background: linear-gradient(rgb(${$firstColor.join(',')}), rgb(${$secondColor.join(',')}));
          `
    )}
  h2 {
    color: ${({ theme: { text: { main } } }) => main};
    text-align: center;
    font-size: 42px;
  }
`;
