import { poppinsFont } from '@/shared/fonts';

import { StyledButton } from './styled';
import type { ButtonType, VariantButton } from './types';

export const Button = ({
    children,
    variant = 'primary',
    onClick,
    type = 'button',
}: {
    children: string,
    variant?: VariantButton,
    onClick?: () => void,
    type?: ButtonType,
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
