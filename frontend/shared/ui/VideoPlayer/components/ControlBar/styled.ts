import styled from 'styled-components';

export const StyledControlBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  padding: 16px;
  width: calc(100% - 31px);
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const StyledIconButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  background: transparent;

  color: white;
  font-size: 35px;
  
  cursor: pointer;
`;
