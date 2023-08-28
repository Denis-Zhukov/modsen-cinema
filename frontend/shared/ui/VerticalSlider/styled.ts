'use client';

import Image from 'next/image';
import styled, { css } from 'styled-components';

import type { Theme } from '@/shared/constants/themes';
import { Controls } from "@/shared/ui/VerticalSlider/Controls";

export const StyledVerticalSlider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  
  @media screen and (max-width: 485px){
    flex-direction: column;
  }
`;

export const StyledMainSlide = styled.div<Theme>`
  display: flex;
  flex-direction: column;
  color: ${({ theme: { text: { main } } }) => main};
  width: 260px;

  h3 {
    font-size: 32px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const StyledBadges = styled.div<Theme>`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const StyledSideSlides = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const StyledControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 86px;

  @media screen and (max-width: 485px){
    display: none;
  }
`;

export const StyledArrow = styled(Image)<{ $degree?: number } & Theme>`
  cursor: pointer;
  ${({ theme: { type } }) => (type === 'light' ? 'filter: invert(100%);' : '')}
  ${({ $degree }) => css`transform: rotate(${$degree}deg)`}
`;

StyledArrow.defaultProps = {
    $degree: 0,
};
