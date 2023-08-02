'use client';

import styled, { css } from 'styled-components';

export const StyledBackgroundOuter = styled.div<{ firstColor: [number, number, number], secondColor: [number, number, number] }>`
  box-shadow: inset 0 0 50px 75px #1E1F27;
  background: red;

  ${({ firstColor, secondColor }) => (
        css`
            background: linear-gradient(rgb(${firstColor.join(',')}), rgb(${secondColor.join(',')}));
          `
    )}
`;

export const StyledBackgroundInner = styled.div`
  padding: 100px;
`;
