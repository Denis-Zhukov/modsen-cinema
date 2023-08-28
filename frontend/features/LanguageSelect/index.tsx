import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { StyledLanguage, StyledLanguageSelect } from '@/features/LanguageSelect/styled';

export const LanguageSelect = () => {
    const pathname = usePathname()!.replace(/^\/(en|ru)/i, '/');
    const t = useTranslations('settings');
    return (
        <StyledLanguageSelect>
            <StyledLanguage locale="en" href={pathname}>{t('english')}</StyledLanguage>
            <StyledLanguage locale="ru" href={pathname}>{t('russian')}</StyledLanguage>
        </StyledLanguageSelect>
    );
};
