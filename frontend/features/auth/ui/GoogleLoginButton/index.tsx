import { useTranslations } from 'next-intl';
import { FcGoogle } from 'react-icons/fc';

import { StyledGoogleLoginButton } from '@/features/auth/ui/GoogleLoginButton/styled';
import { interFont } from '@/shared/lib/fonts';

import { googleLogin } from '../../model/google-login';

export const GoogleLoginButton = () => {
    const t = useTranslations();

    return (
        <StyledGoogleLoginButton
            type="button"
            onClick={googleLogin}
            className={interFont.className}
        >
            <FcGoogle/>
            {t('googleAuth')}
        </StyledGoogleLoginButton>
    );
};
