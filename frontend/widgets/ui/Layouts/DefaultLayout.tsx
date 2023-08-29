import 'normalize.css';

import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Providers } from '@/application/providers';
import { TranslateProvider } from '@/application/providers/subproviders/TranslateProvider';
import { EditProfileForm } from 'widgets/EditProfileForm';
import { LoginForm } from 'widgets/LoginForm';
import { RegisterForm } from 'widgets/RegisterForm';
import { SettingsForm } from 'widgets/SettingsForm';

export const DefaultLayout = ({
    children,
    params,
}: { children: React.ReactNode, params: Record<string, string> }) => {
    const locale = useLocale();

    if (params.locale !== locale) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>
                <Providers>
                    <TranslateProvider locale={locale}>
                        {children}

                        <RegisterForm/>
                        <LoginForm/>
                        <SettingsForm/>
                        <EditProfileForm/>

                        <ToastContainer/>
                    </TranslateProvider>
                </Providers>
                <div id="modal"/>
                <div id="side-menu"/>
            </body>
        </html>
    );
};
