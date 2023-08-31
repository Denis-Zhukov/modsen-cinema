import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

import { Theme } from '@/shared/config/constants/Themes';

export const StyledWrapperModal = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  
  width: 100vw !important;
  height: 100vh !important;
  
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 31, 39, 0.7);
  z-index: 999999;
`;

export const StyledModal = styled.div<Theme>`
  padding: 40px 50px;
  width: 840px;
  transition: background-color .5s ease-in-out, color .5s ease-in-out;
  background: ${({ theme: { background } }) => background};;
  position: relative;
  box-shadow: 0 0 50px 5px rgba(155, 155, 155, 0.05);
`;

export const StyledTopBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledCloseButton = styled(Image)<Theme>`
  cursor: pointer;
  ${({ theme: { type } }) => (type === 'light' ? 'filter: invert(100%);' : '')}
`;
