'use client';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { Colors } from '@/shared/config/constants/Colors';

const styleByOrder = {
    '-2': css`
      width: min(8vw, 96px);
      height: min(8vw, 96px);
    `,
    '-1': css`
      width: min(9vw, 112px);
      height: min(9vw, 112px);
    `,
    0: css`
      width: min(9.75vw, 128px);
      height: min(9.75vw, 128px);
      background: ${Colors.ORANGE};
    `,
    1: css`
      width: min(8.5vw, 112px);
      height: min(8.5vw, 112px);
    `,
    2: css`
      width: min(9vw, 96px);
      height: min(9vw, 96px);
    `,
};

export const StyledItem = styled(motion.div)<{ $order: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  border-radius: 10px;
  border: 1px solid #000;
  background: #BDBDBD;
  transition: background-color .3s ease-in-out;

  ${({ $order }) => {
      //@ts-ignore
      return styleByOrder[$order];
  }
}
`;
