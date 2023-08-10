'use client';

import Link from 'next/link';

import { Button } from '@/shared/ui/Button';
import type { TVariantButton } from '@/shared/ui/Button/types';

export const NavButton = ({
    path,
    variant = 'primary',
    children,
    onClick,
}: {
    path: string,
    variant?: TVariantButton
    children: string,
    onClick?: () => void
}) => <Link href={path}><Button variant={variant} onClick={onClick}>{children}</Button></Link>;
