import { useMemo } from 'react';
import { bindActionCreators } from 'redux';

import { useAppDispatch } from '@/shared/hooks/redux-hooks';

const actions = {};

export const useActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
