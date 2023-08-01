import Image from 'next/image';
import React from 'react';

import Dc from './images/dc.png';
import Marvel from './images/marvel.png';
import Netflix from './images/netflix.png';
import Paramount from './images/paramount.png';
import Sony from './images/sony.png';
import Walt from './images/walt.png';
import Warner from './images/warner.png';
import { StyledStudios } from './styled';

export const Studios = () => (
    <StyledStudios>
        <Image src={Paramount} alt="Paramount Pictures" height={64} width={64}/>
        <Image src={Marvel} alt="Marvel" height={64} width={120}/>
        <Image src={Dc} alt="DC" height={64} width={64}/>
        <Image src={Warner} alt="Warner Bros" height={64} width={64}/>
        <Image src={Netflix} alt="Netflix" height={64} width={64}/>
        <Image src={Walt} alt="Walt Disney" height={64} width={64}/>
        <Image src={Sony} alt="Sony ent" height={64} width={64  }/>
    </StyledStudios>
);
