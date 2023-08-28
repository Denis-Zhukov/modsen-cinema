import type { ReactNode } from 'react';

import { StyledButtonIcon } from '@/shared/ui/ButtonIcon/styled';

type Props = {
    start?: ReactNode
    end?: ReactNode
    onClick?: () => void
    children: string
};

export const ButtonIcon = ({
    start,
    end,
    children,
    onClick,
}: Props) => (
    <StyledButtonIcon onClick={onClick}>
        {start}
        <span>{children}</span>
        {end}
    </StyledButtonIcon>
);
