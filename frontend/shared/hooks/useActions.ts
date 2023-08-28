import { useMemo } from 'react';
import { bindActionCreators } from 'redux';

import { useAppDispatch } from '@/shared/hooks/redux-hooks';
import { authActions } from '@/shared/store/slices/auth';
import { loginThunk } from '@/shared/store/slices/auth/loginThunk';
import { logoutThunk } from '@/shared/store/slices/auth/logoutThunk';
import { refreshAuthThunk } from '@/shared/store/slices/auth/refreshAuthThunk';
import { themeActions } from '@/shared/store/slices/theme';

const actions = {
    login: loginThunk,
    initAuth: refreshAuthThunk,
    logout: logoutThunk,
    ...authActions,
    ...themeActions,
};

export const useActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
