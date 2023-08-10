'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
  height: 420px;
  border-radius: 20px;
  padding: 22px;
  background: rgba(79, 79, 79, 0.3);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, .75);
  color: #FFFFFF;

  h3 {
    font-size: 32px;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0;
  }

  h4 {
    font-size: 16px;
    font-weight: 300;
    margin: 0 0 32px 0;
  }

  p {
    font-size: 16px;
    font-style: italic;
    font-weight: 300;
    margin: 0;
    line-height: 24px;

    &::before, &::after {
      content: '"';
    }
  }
`;

export const StyledReadMore = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  color: #FFFFFF;
  text-decoration: none;
  margin-top: auto;

  div {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 300;
    color: #D98639;
  }

  img, div {
    transition: ease-in-out 0.15s;
  }

  &:hover img {
    transform: rotate(180deg);
  }

  &:hover div {
    font-weight: bold;
  }
`;
