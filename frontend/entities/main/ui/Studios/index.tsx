import Image from 'next/image';
import React from 'react';

import { studios } from '@/entities/main/ui/Studios/studios';

import { StyledStudios } from './styled';

export const Studios = () => (
    <StyledStudios>
        {studios.map(({
            alt,
            ...props
        }) => <Image key={alt} alt={alt} {...props}/>)}
    </StyledStudios>
);
