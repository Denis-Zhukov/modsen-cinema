'use client';

import styled from 'styled-components';

export const StyledTrailerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 67px;
  }

  > div {
    width: min(800px, calc(100vw - 150px));
    box-shadow: 15px 15px 50px 0 #000;
  }
`;
