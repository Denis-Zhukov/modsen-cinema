import Image from 'next/image';

import { nunitoSansFont } from '@/shared/fonts';

import ReadMore from './images/read-more-icon.svg';
import { StyledCard, StyledReadMore } from './styled';

type Props = {
    title: string,
    subtitle: string,
    body: string
    readMoreHref: string
};

export const Card = ({
    title,
    subtitle,
    body,
    readMoreHref,
}: Props) => (
    <StyledCard className={nunitoSansFont.className}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{body}</p>
        <StyledReadMore href={readMoreHref}>
            <div>Read more</div>
            <Image src={ReadMore} alt="Read more" width={40} height={40}/>
        </StyledReadMore>
    </StyledCard>
);
