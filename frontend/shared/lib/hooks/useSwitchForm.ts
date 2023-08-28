import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { useCreateQueryPath } from '@/shared/lib/hooks/useCreateQueryPath';

export const useSwitchForm = () => {
    const createQueryPath = useCreateQueryPath();
    const router = useRouter();

    return useCallback((form: string) => {
        router.replace(createQueryPath('form', form));
    }, [createQueryPath, router]);
};
