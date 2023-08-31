'use client';

import styled from 'styled-components';

import { Theme } from '@/shared/config/constants/Themes';
import { motion } from "framer-motion";
import { MVerticalSlider } from "@/shared/ui/VerticalSlider";

export const StyledShowNow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  
  @media screen and (max-width: 1120px){
    grid-template-columns: 1fr;
  }
`;

export const StyledTextBlock = styled(motion.div)<Theme>`
  color: ${({ theme: { text: { main } } }) => main};
  font-weight: 300;
  z-index: 999;
  max-width: 600px;

  h2 {
    font-size: 48px;
    text-transform: uppercase;
    color: ${({ theme: { text: { main } } }) => main};
    font-weight: 300;
  }

  p {
    font-size: 40px;
    text-shadow: 10px 4px 4px rgba(0, 0, 0, 0.25);
    font-style: italic;
    font-weight: 300;
  }

  p, h2 {
    font-style: italic;
  }
`;
