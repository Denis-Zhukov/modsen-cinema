import Image from 'next/image';
import type { ReactNode } from 'react';

import { poppinsFont } from '@/shared/fonts';

import {
    StyledDivider, StyledEdge, StyledInfoBlock,
    StyledLongCard,
} from './styled';

type Props = {
    image: string,
    upperElement: ReactNode
    downElement: ReactNode
    edgeElement: ReactNode
};

export const SplittedLongCard = ({
    image,
    upperElement,
    downElement,
    edgeElement,
}: Props) => (
    <StyledLongCard className={poppinsFont.className}>
        <Image src={image} alt="preview" width={145} height={200}/>
        <StyledEdge>{edgeElement}</StyledEdge>
        <StyledInfoBlock>
            {upperElement}
            <StyledDivider/>
            {downElement}
        </StyledInfoBlock>
    </StyledLongCard>
);
