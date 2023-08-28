'use client';

import { Form } from 'formik';
import styled from 'styled-components';

import type { Theme } from '@/shared/constants/themes';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledRow = styled.div`
  display: flex;
`;

export const StyledTitle = styled.div<Theme>`
  width: 200px;
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 28px;
`;

export const StyledSubmitButton = styled.button`
  align-self: flex-end;
`;
