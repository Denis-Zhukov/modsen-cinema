import { StyledButton } from './styled';
import type { TVariantButton } from './types';

export const Button = ({ children, variant = 'primary' }: {
    children: string,
    variant?: TVariantButton
}) => (
    <StyledButton type="button" variant={variant}>{children}</StyledButton>
);
