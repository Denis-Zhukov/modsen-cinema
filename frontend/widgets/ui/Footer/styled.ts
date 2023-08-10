'use client';

import styled from 'styled-components';

export const StyledFooterWrapper = styled.div`
  box-shadow: inset 0 0 50px 50px #21222a;
  background: #1E1F27;
`;

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: space-between;
  padding: 40px;
  max-width: 1332px;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;

  h2, a{
    color: #FFF;
  }
  
  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  
  a{
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
  }
`;

export const StyledSubscribe = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFF;
  font-size: 16px;
  font-weight: 700;
  max-width: 395px;

  input {
    color: white;
    padding: 12px 24px;
    border-radius: 40px;
    background: rgba(255, 255, 255, 0.15);
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  p {
    opacity: 0.4;
    color: #FFF;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;
