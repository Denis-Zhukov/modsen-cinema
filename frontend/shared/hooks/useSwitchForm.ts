import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { Forms } from '@/shared/constants/Forms';
import { useCreateQueryPath } from '@/shared/hooks/useCreateQueryPath';

export const useSwitchForm = () => {
    const createQueryPath = useCreateQueryPath();
    const router = useRouter();

    return useCallback((form: Forms) => {
        router.replace(createQueryPath('form', form));
    }, [createQueryPath, router]);
};
