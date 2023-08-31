import { Studios } from '@/entities/main';
import { StyledMain, StyledYearText } from '@/pages/main/ui/Main/styled';
import { poppinsFont } from '@/shared/lib/fonts';
import { ShowNow, Trailer } from '@/widgets/main';

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
