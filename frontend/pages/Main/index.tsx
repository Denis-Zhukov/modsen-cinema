'use client';

import { StyledMain } from '@/pages/Main/styled';
import { ShowNow } from '@/widgets/ui/ShowNow';
import { Trailer } from '@/widgets/ui/Trailer';

export const Main = () => (
    <StyledMain>
        <Trailer/>
        <ShowNow/>
    </StyledMain>
);
