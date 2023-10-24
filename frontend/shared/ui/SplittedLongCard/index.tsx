import type { BaseHTMLAttributes, ReactNode } from 'react';
import React from 'react';

import type { Theme } from '@/application/Themes';

import {
    StyledDivider,
    StyledEdge,
    StyledInfoBlock,
    StyledLongCard,
} from './styled';

type Props = {
    image: string;
    upperElement: ReactNode;
    downElement: ReactNode;
    edgeElement: ReactNode;
} & BaseHTMLAttributes<HTMLDivElement> &
    Partial<Theme>;

export const SplittedLongCard = ({
    image,
    upperElement,
    downElement,
    edgeElement,
    ...props
}: Props) => (
    <StyledLongCard {...props}>
        <img src={image} alt="preview" width={145} height={200} />
        <StyledEdge>{edgeElement}</StyledEdge>
        <StyledInfoBlock>
            {upperElement}
            <StyledDivider />
            {downElement}
        </StyledInfoBlock>
    </StyledLongCard>
);
