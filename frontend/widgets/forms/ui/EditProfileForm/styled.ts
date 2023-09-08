'use client';

import { Field, Form } from 'formik';
import styled from 'styled-components';

import type { Theme } from '@/shared/config/constants/Themes';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  
  @media screen and (max-width: 625px){
    grid-template-columns: 1fr;
  }
`;

export const StyledTitle = styled.div<Theme>`
  color: ${({ theme: { text: { main } } }) => main};
  font-size: 28px;
`;

export const StyledSubmitButton = styled.button`
  align-self: flex-end;
  border: 2px solid #ccc;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  color: #333;
  text-decoration: none;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme: { line } }) => line};
  }
`;

export const StyledInputFile = styled.input`
  border: 2px solid #ccc;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme: { line } }) => line};
  }
`;

export const StyledField = styled(Field)<Theme>`
  border: 2px solid #ccc;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme: { line } }) => line};
  }
`;
