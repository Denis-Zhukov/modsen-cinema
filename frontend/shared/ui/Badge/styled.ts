import styled, { css } from 'styled-components';

import { Theme } from '@/shared/constants/themes';

export const StyledBadge = styled.div<Theme>`
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 15px;
  padding: 8px;
  border-radius: 10px;
  ${({ theme: { type, line } }) => (type === 'light' ? css`
    background: transparent;
    border: 1px solid ${line}
  ` : css`
    background: #484747;
    border: none
  `)};
`;
