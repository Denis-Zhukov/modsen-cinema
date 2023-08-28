'use client';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { Colors } from '@/shared/config/constants/Colors';
import { Theme } from '@/shared/config/constants/Themes';

const styleByOrder = {
    '-2': css`
      width: 96px;
      height: 96px;
    `,
    '-1': css`
      width: 112px;
      height: 112px;
    `,
    0: css`
      width: 128px;
      height: 128px;
      background: ${Colors.ORANGE};
    `,
    1: css`
      width: 112px;
      height: 112px;
    `,
    2: css`
      width: 96px;
      height: 96px;
    `,
};

export const StyledSlider = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledItemsBlock = styled.div`
  display: flex;
  gap: 42px;
  width: 724px;
  height: 128px;
`;

export const StyledItem = styled(motion.div)<{ $order: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  border-radius: 10px;
  border: 1px solid #000;
  background: #BDBDBD;
  transition: all .3s ease-in-out;\
  position: relative;

  flex: 0 0 auto;

  ${({ $order }) => {
    // @ts-ignore
        return styleByOrder[$order];
    }}
`;

export const StyledArrow = styled(motion.img)<{ $degree?: number, $left?: boolean } & Theme>`
  cursor: pointer;
  align-self: center;
  padding: 0 32px;
  ${({ theme: { type } }) => (type === 'light' ? 'filter: invert(100%);' : '')}
  ${({ $degree }) => css`transform: rotate(${$degree}deg) !important;`}
  ${({ $left }) => ($left ? 'left: 0' : 'right: 0')}
`;

StyledArrow.defaultProps = {
    $degree: 0,
    $left: false,
};
