'use client';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { Colors } from '@/shared/config/constants/Colors';

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

export const StyledItem = styled(motion.div)<{ $order: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  border-radius: 10px;
  border: 1px solid #000;
  background: #BDBDBD;

  ${({ $order }) => {
      //@ts-ignore
      return styleByOrder[$order];
  }
}
`;
