'use client';

import React, { useEffect } from 'react';

import { useActions } from '@/shared/hooks/useActions';

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const { initAuth } = useActions();

    useEffect(() => {
        initAuth();
    }, [initAuth]);

    return children;
};
