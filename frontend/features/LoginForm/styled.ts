import styled from 'styled-components';

import { Colors } from '@/shared/constants/Colors';
import { Theme } from '@/shared/constants/themes';

export const StyledTitle = styled.div<Theme>`
  max-width: 430px;
  height: 123px;
  color: ${({ theme: { text: { main } } }) => main};
  text-shadow: 10px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 32px;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 33px;

  span {
    color: ${Colors.ORANGE};
  }
`;

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
  }
`;

export const StyledAuthBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 auto;

  button {
    padding: 20px;
    margin-bottom: 20px;
  }
`;

export const StyledSocials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const StyledErrorText = styled.div`
  display: block;
  height: 20px;
  color: ${({ theme: { error } }) => error};
  margin: 10px 0 0 90px;
`;

export const StyledBottomText = styled.div<Theme>`
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 18px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;

  > a {
    color: ${({ theme: { text: { main } } }) => main};
    font-style: italic;
  }
`;

export const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 9;
`;
