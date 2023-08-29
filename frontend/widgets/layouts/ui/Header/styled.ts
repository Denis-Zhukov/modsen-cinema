'use client';

import Image from 'next/image';
import { CiSettings } from 'react-icons/ci';
import styled from 'styled-components';

import { Theme } from '@/shared/config/constants/Themes';

export const StyledHeaderWrapper = styled.div<Theme>`
  background: ${({ theme: { background } }) => background};
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 65px 85px;
  gap: 60px;

  @media (max-width: 1270px) {
    flex-direction: column;
  }
`;

export const StyledLogo = styled(Image)`
  filter: drop-shadow(0 0 5px black);
  position: relative;
  top: -7px;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;

  gap: 16px;
  padding: 0 16px;
  flex: 1 1 auto;

  @media (max-width: 1270px) {
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

  @media (max-width: 1270px) {
    flex-direction: column;
  }
`;

export const SettingsBlock = styled(CiSettings)<Theme>`
  flex: 0 0 auto;
  font-size: 54px;
  cursor: pointer;
  color: ${({ theme: { text: { main } } }) => main};
`;
