'use client';

import { AnimatePresence } from 'framer-motion';

import { LanguageSelect } from '@/entities/ui/LanguageSelect';
import { ThemeButton } from '@/entities/ui/ThemeButton';
import { Forms } from '@/shared/constants/Forms';
import { useInitForm } from '@/shared/hooks/useInitForm';
import { Modal } from '@/shared/ui/Modal';

import { StyledRow, StyledSettingsForm } from './styled';

export const SettingsForm = () => {
    const { active, handleCloseForm } = useInitForm(Forms.SETTINGS);
    return (
        <AnimatePresence>
            {active && (
                <Modal onClose={handleCloseForm}>
                    <StyledSettingsForm>
                        <StyledRow>Theme: <ThemeButton/></StyledRow>
                        <StyledRow>Language: <LanguageSelect/></StyledRow>
                    </StyledSettingsForm>
                </Modal>
            )}
        </AnimatePresence>
    );
};
