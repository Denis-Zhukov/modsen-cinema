'use client';

import styled from 'styled-components';

export const StyledTrailer = styled.div`
  display: flex;
  max-width: 1340px;
  color: #FFFFFF;
  background: #1E1F27;
  margin: 0 auto;
  overflow-y: hidden;
`;

export const StyledTextBlock = styled.div`
  box-shadow: 50px 0 50px 75px #1E1F27;
  position: relative;
  z-index: 999;
  font-weight: 300;
  width: 40%;

  h2 {
    font-size: 48px;
    text-transform: uppercase;
  }

  p {
    font-size: 32px;
    text-align: justify;
  }
`;
