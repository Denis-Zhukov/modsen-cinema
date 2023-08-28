import { NavButton } from '@/features/NavButton';
import { Forms } from '@/shared/config/constants/Forms';
import { useCreateQueryPath } from '@/shared/lib/hooks/useCreateQueryPath';
import { useTranslations } from "next-intl";

export const SignInButton = () => {
    const createQueryPath = useCreateQueryPath();
    const t = useTranslations('header');

    return (
        <NavButton
            path={createQueryPath('form', Forms.LOGIN)}
            variant="secondary"
        >
            {t('signIn')}
        </NavButton>
    );
};
