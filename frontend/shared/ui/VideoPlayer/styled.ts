import Image from 'next/image';
import styled from 'styled-components';

export const StyledVideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const StyledPreview = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
  object-fit: cover;
`;
