import styled from 'styled-components';

import { Theme } from '@/shared/config/constants/Themes';

export const StyledTextBox = styled.div<Theme>`
  display: flex;
  flex-direction: row;
  gap: 25px;

  input {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;

    color: ${({ theme: { text: { main } } }) => main};
    border-bottom: 2.5px solid ${({ theme: { line } }) => line};
    font-size: 24px;
    font-weight: 300;
    background: transparent;
  }

  img {
    ${({ theme: { type } }) => (type === 'light' ? 'filter:invert(100%);' : '')}
  }
`;
