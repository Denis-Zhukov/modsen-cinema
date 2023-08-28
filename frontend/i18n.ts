import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
    messages: (await import(`./shared/config/translations/${locale}.json`)).default,
}));
