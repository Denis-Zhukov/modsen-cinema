'use client';

import { AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { LanguageSelect } from '@/features/settings/ui/LanguageSelect';
import { ThemeButton } from '@/features/settings/ui/ThemeButton';
import { Forms } from '@/shared/config/constants/Forms';
import { useInitForm } from '@/shared/lib/hooks/useInitForm';
import { Modal } from '@/shared/ui/Modal';

import { StyledRow, StyledSettingsForm } from './styled';
import { poppinsFont } from "@/shared/lib/fonts";

export const SettingsForm = () => {
    const { active, handleCloseForm } = useInitForm(Forms.SETTINGS);
    const t = useTranslations('settings');

    return (
        <AnimatePresence>
            {active && (
                <Modal onClose={handleCloseForm}>
                    <StyledSettingsForm className={poppinsFont.className}>
                        <StyledRow>{t('theme')}: <ThemeButton/></StyledRow>
                        <StyledRow>{t('language')}: <LanguageSelect/></StyledRow>
                    </StyledSettingsForm>
                </Modal>
            )}
        </AnimatePresence>
    );
};
