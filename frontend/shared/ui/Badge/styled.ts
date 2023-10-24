import styled, { css } from 'styled-components';

export const StyledBadge = styled.div`
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 16px;
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
