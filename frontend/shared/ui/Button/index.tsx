import { StyledButton } from './styled';
import type { TVariantButton } from './types';

export const Button = ({ children, variant }: {
    children: string,
    variant?: TVariantButton
}) => (
    <StyledButton type="button" variant={variant}>{children}</StyledButton>
);

Button.defaultProps = {
    variant: 'primary',
};
