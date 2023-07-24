'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1E1F27;
  padding: 65px 85px;
  gap: 60px;
`;

export const StyledLogo = styled(Image)`
  position: relative;
  top: -7px;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 16px;
  padding: 0 16px;
  flex: 1 1 auto;
`;

export const StyledAuthBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  * {
    width: 200px;
    height: 55px;
  }
`;

export const SettingsBlock = styled(Image)`
`;
