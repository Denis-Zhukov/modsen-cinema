import { ShowNow, Trailer } from 'widgets/main';

import { Studios } from '@/entities/main';
import { StyledMain, StyledYearText } from '@/pages/Main/styled';
import { poppinsFont } from '@/shared/lib/fonts';

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
