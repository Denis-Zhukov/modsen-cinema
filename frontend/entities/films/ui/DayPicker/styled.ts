'use client';

import styled from 'styled-components';

export const StyledDayPicker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLine = styled.div`
  width: min(100%, 740px);
  height: 2px;
  background: white;
  margin: 20px 0;
`;

export const StyledDays = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin: 0 auto;
`;
