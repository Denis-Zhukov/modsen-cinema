import styled from 'styled-components';

export const StyledTitle = styled.div`
  max-width: 430px;
  height: 123px;
  color: #FFF;
  text-shadow: 10px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 32px;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 33px;

  span {
    color: #D98639;
  }
`;

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
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
  }
`;
