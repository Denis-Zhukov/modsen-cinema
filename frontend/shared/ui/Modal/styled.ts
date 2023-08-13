'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const StyledWrapperModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 31, 39, 0.7);
  z-index: 9999;
`;

export const StyledModal = styled.div`
  padding: 40px 50px;
  width: 840px;
  background: #1E1F27;
  position: relative;
  box-shadow: 0 0 50px 5px rgba(155, 155, 155, 0.05);
`;

export const StyledTopBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledCloseButton = styled(Image)`
  cursor: pointer;
`;