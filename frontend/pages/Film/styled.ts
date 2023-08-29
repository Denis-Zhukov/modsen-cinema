'use client';

import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { Theme } from '@/shared/config/constants/Themes';

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

export const StyledTrailerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 67px;
  }

  > div {
    width: 788.3px;
    height: 450.101px;
    box-shadow: 15px 15px 50px 0 #000;
  }
`;
