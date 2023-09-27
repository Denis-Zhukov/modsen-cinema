import styled from 'styled-components';
import { Colors } from "@/shared/config/constants/Colors";

export const StyledTimeBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 93.5%;
  height: 20px;
  border-radius: 50%;
`;

export const StyledTimeBar = styled.div`
  border-radius: 10px;
  overflow-x: hidden;

  flex: 1 1 auto;
  height: 100%;

  background: #5a5a5a;
  position: relative;
`;

export const StyledProgressTimeBar = styled.div`
  height: 100%;

  background: ${Colors.ORANGE};

  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;

  transition: width .1s ease-in-out;
`;

export const StyledPreloadedTimeBar = styled.div`
  height: 100%;

  background: ${Colors.GRAY};

  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
`;

export const StyledTimer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 125px;
  color: ${Colors.WHITE};
`;
