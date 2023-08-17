'use client';

import styled, { css } from 'styled-components';

import { Colors } from '@/shared/constants/Colors';

export const StyledBackground = styled.div<{
    $firstColor: [number, number, number],
    $secondColor: [number, number, number]
}>`
  box-shadow: inset 0 0 60px 100px #1E1F27;
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
    color: ${Colors.WHITE};
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

export const StyledReviews = styled.div`
  margin: 100px auto 155px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
  max-width: 1310px;
`;
