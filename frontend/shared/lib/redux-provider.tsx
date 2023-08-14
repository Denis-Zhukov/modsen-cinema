'use client';

import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/shared/store';

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => (
    <Provider
        store={store}
    >
        {children}
    </Provider>
);
