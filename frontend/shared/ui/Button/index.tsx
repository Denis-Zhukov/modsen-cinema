import { poppinsFont } from '@/shared/fonts';

import { StyledButton } from './styled';
import type { TVariantButton } from './types';

export const Button = ({
    children,
    variant = 'primary',
    onClick,
    type = 'button',
}: {
    children: string,
    variant?: TVariantButton,
    onClick?: () => void,
    type?: 'button' | 'submit',
}) => (
    <StyledButton
        type={type}
        $variant={variant}
        className={poppinsFont.className}
        onClick={onClick}
    >
        {children}
    </StyledButton>
);
