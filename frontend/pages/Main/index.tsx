'use client';

import { StyledMain, StyledYearText } from '@/pages/Main/styled';
import { poppinsFont } from '@/shared/fonts';
import { Studios } from '@/shared/ui/Studios';
import { ShowNow } from '@/widgets/ui/ShowNow';
import { Trailer } from '@/widgets/ui/Trailer';

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
