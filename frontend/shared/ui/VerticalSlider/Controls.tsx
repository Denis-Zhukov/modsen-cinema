import React from 'react';

import Arrow from '@/shared/ui/VerticalSlider/images/arrow.png';
import { StyledArrow, StyledControls } from '@/shared/ui/VerticalSlider/styled';

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
            src={Arrow}
            alt=""
            width={30}
            height={20}
            degree={180}
        />
        <StyledArrow onClick={onNext} src={Arrow} alt="" width={30} height={20}/>
    </StyledControls>
));
