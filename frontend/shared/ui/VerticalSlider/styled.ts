import Image from 'next/image';
import styled, { css } from 'styled-components';

import { Theme } from '@/shared/constants/themes';

export const StyledVerticalSlider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 90px;
`;

export const StyledMainSlide = styled.div<Theme>`
  display: flex;
  flex-direction: column;
  color: ${({ theme: { text: { main } } }) => main};

  h3 {
    font-size: 32px;
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
`;

export const StyledArrow = styled(Image)<{ $degree?: number } & Theme>`
  cursor: pointer;
  ${({ theme: { type } }) => (type === 'light' ? 'filter: invert(100%);' : '')}
  ${({ $degree }) => css`transform: rotate(${$degree}deg)`}
`;

StyledArrow.defaultProps = {
    $degree: 0,
};
