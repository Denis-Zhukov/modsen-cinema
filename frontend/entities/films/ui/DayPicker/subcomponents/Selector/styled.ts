'use client';

import Image from 'next/image';
import styled, { css } from 'styled-components';

import { Theme } from '@/shared/config/constants/Themes';

export const StyledSlider = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledItemsBlock = styled.div`
  display: flex;
  gap: 42px;
  width: 724px;
  height: 128px;
`;

export const StyledArrow = styled.img<{ $degree?: number, $left?: boolean } & Theme>`
  cursor: pointer;
  align-self: center;
  padding: 0 32px;
  ${({ theme: { type } }) => (type === 'light' ? 'filter: invert(100%);' : '')}
  ${({ $degree }) => css`transform: rotate(${$degree}deg) !important;`}
  ${({ $left }) => ($left ? 'left: 0' : 'right: 0')}
  
  &:hover{
    transform: scale(1.05);
    background: red !important;
  }
`;

StyledArrow.defaultProps = {
    $degree: 0,
    $left: false,
};
