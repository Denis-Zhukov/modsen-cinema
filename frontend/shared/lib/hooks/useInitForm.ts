import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const useInitForm = (form: string) => {
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
