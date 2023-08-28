import Image from 'next/image';
import { useCallback, useState } from 'react';

import { nunitoSansFont } from '@/shared/fonts';

import ReadMoreIcon from './images/read-more-icon.svg';
import { StyledCard, StyledHugeText, StyledReadMore } from './styled';

type Props = {
    title: string,
    subtitle: string,
    body: string
};

export const Card = ({
    title,
    subtitle,
    body,
}: Props) => {
    const [show, setShow] = useState(false);
    const handleShowMore = useCallback(() => setShow((prev) => !prev), [setShow]);

    return (
        <StyledCard className={nunitoSansFont.className}>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <StyledHugeText $show={show}>{body}</StyledHugeText>
            <StyledReadMore onClick={handleShowMore}>
                <div>{show ? 'Hide' : 'Read more'}</div>
                <Image src={ReadMoreIcon} alt="Read more" width={40} height={40}/>
            </StyledReadMore>
        </StyledCard>
    );
};
