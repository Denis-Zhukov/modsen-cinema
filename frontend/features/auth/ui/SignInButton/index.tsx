import { useTranslations } from 'next-intl';

import { Forms } from '@/shared/config/constants/Forms';
import { scale } from '@/shared/lib/animations/scale';
import { useCreateQueryPath } from '@/shared/lib/hooks/useCreateQueryPath';
import { MNavButton } from '@/shared/ui/NavButton';

export const SignInButton = () => {
    const createQueryPath = useCreateQueryPath();
    const t = useTranslations('header');

    return (
        <MNavButton
            path={createQueryPath('form', Forms.LOGIN)}
            variant="secondary"
            variants={scale}
            initial="normal"
            whileHover="increase"
            whileTap="decrease"
        >
            {t('signIn')}
        </MNavButton>
    );
};
