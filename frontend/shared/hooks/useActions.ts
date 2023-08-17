import { useMemo } from 'react';
import { bindActionCreators } from 'redux';

import { useAppDispatch } from '@/shared/hooks/redux-hooks';
import { authActions } from '@/shared/store/slices/auth';
import { initAuthThunk } from '@/shared/store/slices/auth/initAuthThunk';
import { loginThunk } from '@/shared/store/slices/auth/loginThunk';
import { logoutThunk } from '@/shared/store/slices/auth/logoutThunk';

const actions = {
    login: loginThunk,
    initAuth: initAuthThunk,
    logout: logoutThunk,
    ...authActions,
};

export const useActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
