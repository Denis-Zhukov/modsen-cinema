import Image from 'next/image';
import type { BaseHTMLAttributes, ReactNode } from 'react';

import { poppinsFont } from '@/shared/lib/fonts';

import {
    StyledDivider, StyledEdge, StyledInfoBlock,
    StyledLongCard,
} from './styled';

type Props = {
    image: string,
    upperElement: ReactNode
    downElement: ReactNode
    edgeElement: ReactNode
} & BaseHTMLAttributes<HTMLDivElement>;

export const SplittedLongCard = ({
    image,
    upperElement,
    downElement,
    edgeElement,
    ...props
}: Props) => (
    <StyledLongCard className={poppinsFont.className} {...props}>
        <Image src={image} alt="preview" width={145} height={200}/>
        <StyledEdge>{edgeElement}</StyledEdge>
        <StyledInfoBlock>
            {upperElement}
            <StyledDivider/>
            {downElement}
        </StyledInfoBlock>
    </StyledLongCard>
);
