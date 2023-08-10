import styled from 'styled-components';

export const StyledPlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background: #D98639;
  border-radius: 50%;
  width: 70px;
  height: 70px;

  border: none;
  outline: none;

  cursor: pointer;
  
  z-index: 10;
`;

export const StyledTriangle = styled.div`
  width: 30px;
  height: 30px;

  background: white;
  clip-path: polygon(90% 50%, 0 0, 0 100%);
  position: relative;
  left: 10%;
`;
