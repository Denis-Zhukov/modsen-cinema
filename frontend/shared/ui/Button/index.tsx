import { poppinsFont } from '@/shared/fonts';

import { StyledButton } from './styled';
import type { TVariantButton } from './types';

export const Button = ({
    children,
    variant = 'primary',
    onClick,
}: {
    children: string,
    variant?: TVariantButton
    onClick?: () => void
}) => (
    <StyledButton
        type="button"
        $variant={variant}
        className={poppinsFont.className}
        onClick={onClick}
    >
        {children}
    </StyledButton>
);
