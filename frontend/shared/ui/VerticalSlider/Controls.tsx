import React from 'react';

import ArrowIcon from './images/arrow.png';
import { StyledArrow, StyledControls } from './styled';

type Props = {
    onPrev: () => void,
    onNext: () => void,
};

export const Controls = React.memo(({
    onPrev,
    onNext,
}: Props) => (
    <StyledControls>
        <StyledArrow
            onClick={onPrev}
            src={ArrowIcon}
            alt="prev-arrow"
            width={30}
            height={20}
            $degree={180}
        />
        <StyledArrow onClick={onNext} src={ArrowIcon} alt="next-arrow" width={30} height={20}/>
    </StyledControls>
));
