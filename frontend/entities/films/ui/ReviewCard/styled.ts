'use client';

import styled, { css } from 'styled-components';

import { Colors } from '@/shared/config/constants/Colors';
import { Theme } from '@/shared/config/constants/Themes';

export const StyledCard = styled.div<Theme>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
  height: 420px;
  border-radius: 20px;
  padding: 22px;
  background: rgba(79, 79, 79, 0.3);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, .75);
  color: ${({ theme: { text: { main } } }) => main};

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
`;

export const StyledReadMore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 16px 0;
  color: ${({ theme: { text: { main } } }) => main};;
  text-decoration: none;
  cursor: pointer;

  div {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 300;
    color: ${Colors.ORANGE};
  }

  img, div {
    transition: ease-in-out 0.15s;
    border-radius: 50%;
  }

  &:hover img {
    transform: rotate(180deg);
  }

  &:hover div {
    font-weight: bold;
  }
`;

export const StyledHugeText = styled.p<{ $show: boolean }>`
  width: 100%;
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  margin: 0;
  line-height: 24px;
  padding: 8px 0;

  ${({ $show }) => ($show ? css`overflow-y: scroll;` : css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 9;
    line-clamp: 9;
    overflow: hidden;
  `)}
  
  
  
  &::before, &::after {
    content: '"';
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, .2);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, .75);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(200, 200, 200, .75);
  }
`;
