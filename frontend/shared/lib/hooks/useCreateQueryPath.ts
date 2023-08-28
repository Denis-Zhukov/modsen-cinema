import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const useCreateQueryPath = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams()!;

    return useCallback((name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) params.set(name, value);
        else params.delete(name);
        return `${pathname}?${params.toString()}`;
    }, [pathname, searchParams]);
};
