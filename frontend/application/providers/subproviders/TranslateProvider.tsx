import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';

export const TranslateProvider = async ({
    children,
    locale,
}: { children: ReactNode, locale: string }) => {
    let messages;
    try {
        messages = (await import(`../../../shared/config/translations/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
        >
            {children}
        </NextIntlClientProvider>
    );
};
