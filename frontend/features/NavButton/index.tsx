import Link from 'next/link';

import { Button } from '@/shared/ui/Button';
import type { TVariantButton } from '@/shared/ui/Button/types';

export const NavButton = ({
    path,
    variant,
    children,
}: {
    path: string,
    variant?: TVariantButton
    children: string
}) => <Link href={path}><Button variant={variant}>{children}</Button></Link>;

NavButton.defaultProps = {
    variant: 'primary',
};
