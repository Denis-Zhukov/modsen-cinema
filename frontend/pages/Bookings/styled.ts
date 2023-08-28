import styled from 'styled-components';

import { Theme } from '@/shared/constants/themes';

export const StyledBookings = styled.div<Theme>`
  flex: 1 1 auto;
  background: ${({ theme: { background } }) => background};
`;
