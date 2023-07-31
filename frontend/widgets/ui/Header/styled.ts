'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const StyledHeaderWrapper = styled.div`
  background: #1E1F27;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 65px 85px;
  gap: 60px;
  
  @media (max-width: 1270px){
    flex-direction: column;
  }
`;

export const StyledLogo = styled(Image)`
  position: relative;
  top: -7px;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  
  gap: 16px;
  padding: 0 16px;
  flex: 1 1 auto;

  @media (max-width: 1270px){
    flex-direction: column;
  }
`;

export const StyledAuthBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  * {
    width: 200px;
    height: 55px;
  }

  @media (max-width: 1270px){
    flex-direction: column;
  }
`;

export const SettingsBlock = styled(Image)`
`;
