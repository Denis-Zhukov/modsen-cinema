import Image from 'next/image';
import styled, { css } from 'styled-components';
import { Colors } from "@/shared/constants/Colors";

export const StyledVerticalSlider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 90px;
`;

export const StyledMainSlide = styled.div`
  display: flex;
  flex-direction: column;
  color: ${Colors.WHITE};

  h3 {
    font-size: 32px;
  }
`;

export const StyledBadges = styled.div`
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

export const StyledArrow = styled(Image)<{ degree?: number }>`
  cursor: pointer;
  ${({ degree }) => css`transform: rotate(${degree}deg)`}
`;

StyledArrow.defaultProps = {
    degree: 0,
};
