import { Studios } from '@/entities/main';
import { poppinsFont } from '@/shared/lib/fonts';
import { ShowNow, Trailer } from '@/widgets/main';

import { StyledMain, StyledYearText } from './styled';

export const Main = () => (
    <StyledMain>
        <Trailer/>
        <ShowNow/>
        <div>
            <Studios/>
            <StyledYearText className={poppinsFont.className}>2023</StyledYearText>
        </div>
    </StyledMain>
);
