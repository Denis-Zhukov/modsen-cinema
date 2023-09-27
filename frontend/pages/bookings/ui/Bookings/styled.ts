import styled from 'styled-components';

import { Theme } from '@/application/Themes';

export const StyledBookings = styled.div<Theme>`
  flex: 1 1 auto;
  background: ${({ theme: { background } }) => background};
  transition: background-color .5s ease-in-out, color .5s ease-in-out;
`;
