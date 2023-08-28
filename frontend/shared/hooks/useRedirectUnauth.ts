import { useRouter } from 'next/navigation';

import { Forms } from '@/shared/constants/Forms';
import { useAppSelector } from '@/shared/hooks/redux-hooks';
import { selectAuth } from '@/shared/store/selectors/auth.selectors';

export const useRedirectUnauth = () => {
    const { isAuth, isSuccess, error } = useAppSelector(selectAuth);
    const router = useRouter();
    if (!isAuth && (isSuccess || error)) router.push(`/?form=${Forms.LOGIN}`);
};
