'use client';

import { Form } from 'formik';
import styled from 'styled-components';

import { Colors } from '@/shared/constants/Colors';
import { Theme } from '@/shared/constants/themes';

export const StyledSubscribe = styled(Form)<Theme>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 16px;
  font-weight: 700;
  max-width: 395px;

  p {
    opacity: 0.4;
    color: ${({ theme: { text: { main } } }) => main};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const StyledInput = styled.div`
  display: flex;
  position: relative;

  input {
    color: ${({ theme: { text: { main } } }) => main};;
    padding: 12px 24px;
    border-radius: 40px;
    background: rgba(255, 255, 255, 0.15);
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    flex: 1 1 auto;
  }

  button {
    position: absolute;
    right: 15px;
    top: calc(50% + 3px);
    transform: translateY(-50%);
    border: none;
    outline: none;
    background: ${Colors.TRANSPARENT};
    color: ${Colors.WHITE};
    cursor: pointer;
    font-size: 24px;
  }
`;

export const StyledHeadTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  * {
    margin: 0;
    padding: 0;
  }

  > p {
    color: red;
    opacity: 1;
  }
`;
