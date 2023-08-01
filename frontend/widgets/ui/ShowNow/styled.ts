'use client';

import styled from 'styled-components';

export const StyledShowNow = styled.div`
  display: flex;
  max-width: 1340px;
  margin: 0 auto;
`;

export const StyledTextBlock = styled.div`
  color: #FFFFFF;
  font-weight: 300;
  width: 50%;
  z-index: 999;

  h2 {
    font-size: 48px;
    text-transform: uppercase;
  }

  p {
    font-size: 40px;
  }

  p, h2 {
    font-style: italic;
  }
`;
