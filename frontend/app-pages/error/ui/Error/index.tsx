import { nunitoSansFont } from '@/shared/lib/fonts';

import { StyledError } from './styled';

export const Error = () => (
    <StyledError className={nunitoSansFont.className}>
        <h1>Something went Wrong!</h1>
        <p>Try updating the page or check back later</p>
    </StyledError>
);
