'use client';

import { useRouter } from 'next/navigation';
import { Button } from 'shared/components/Button';
import type { TVariantButton } from 'shared/components/Button/types';

export const NavButton = ({
    path,
    variant,
    children,
}: {
    path: string,
    variant?: TVariantButton
    children: string
}) => {
    const router = useRouter();

    const handleButtonClick = () => router.push(path);
    return <Button onClick={handleButtonClick} variant={variant}>{children}</Button>;
};

NavButton.defaultProps = {
    variant: 'primary',
};
