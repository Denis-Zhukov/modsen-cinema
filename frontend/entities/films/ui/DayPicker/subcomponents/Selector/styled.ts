'use client';

import styled, { css } from 'styled-components';

import { Theme } from '@/application/Themes';

export const StyledSlider = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledItemsBlock = styled.div`
  display: flex;
  gap: 42px;
  height: 128px;
  
  @media screen and (max-width: 1030px){
    gap: 10px;
  }

  @media screen and (max-width: 800px){
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

export const StyledArrow = styled.img<{ $degree?: number, $left?: boolean } & Theme>`
  cursor: pointer;
  align-self: center;
  padding: 0 32px;
  ${({ theme: { type } }) => (type === 'light' ? 'filter: invert(100%);' : '')}
  ${({ $degree }) => css`transform: rotate(${$degree}deg) !important;`}
  ${({ $left }) => ($left ? 'left: 0' : 'right: 0')}
`;

StyledArrow.defaultProps = {
    $degree: 0,
    $left: false,
};
