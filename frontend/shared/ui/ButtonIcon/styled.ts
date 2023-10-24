import styled from 'styled-components';

export const StyledButtonIcon = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 18px;
  background: #D98639;
  color: black;
  font-size: 18px;
  font-weight: 300;
  padding: 8px 14px;
  outline: none;
  border: none;
  transition: all ease-in-out .15s;

  &:hover {
    color: white;
  }

  &:active {
    transform: scale(1.05);
  }
`;
