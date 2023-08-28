import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import { Forms } from '@/shared/constants/Forms';

export const useInitForm = (form: Forms) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()!;
    const currentForm = searchParams.get('form');

    const handleCloseForm = useCallback(
        () => {
            const params = new URLSearchParams(searchParams.toString());
            params.delete('form');
            router.push(`${pathname}?${params.toString()}`);
        },
        [pathname, router, searchParams],
    );

    return {
        active: currentForm === form,
        handleCloseForm,
    };
};
