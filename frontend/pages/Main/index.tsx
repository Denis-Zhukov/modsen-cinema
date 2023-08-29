import { Studios } from '@/entities/main';
import { StyledMain, StyledYearText } from '@/pages/Main/styled';
import { poppinsFont } from '@/shared/lib/fonts';
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
