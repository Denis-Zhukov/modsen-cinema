'use client';

import { StyledLoader } from './styled';

type Props = {
    color: string
};

export const Loader = ({ color }: Props) => (
    <StyledLoader color={color}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </StyledLoader>
);
