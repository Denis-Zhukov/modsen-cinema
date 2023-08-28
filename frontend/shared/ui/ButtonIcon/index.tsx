import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { StyledButtonIcon } from './styled';

type Props = {
    start?: ReactNode
    end?: ReactNode
    children: string
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonIcon = ({
    start,
    end,
    children,
    ...props
}: Props) => (
    <StyledButtonIcon {...props}>
        {start}
        <span>{children}</span>
        {end}
    </StyledButtonIcon>
);
