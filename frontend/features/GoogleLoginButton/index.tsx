import { FcGoogle } from 'react-icons/fc';

import { StyledGoogleLoginButton } from '@/features/GoogleLoginButton/styled';
import { interFont } from '@/shared/lib/fonts';
import { useTranslations } from "next-intl";

export const GoogleLoginButton = () => {
    const googleLogin = async () => {
        try {
            window.open('http://localhost:8000/api/auth/google', '_self');
        } catch (ex) {
            alert(ex);
        }
    };

    const t = useTranslations();

    return (
        <StyledGoogleLoginButton type="button" onClick={googleLogin} className={interFont.className}>
            <FcGoogle/>
            {t('googleAuth')}
        </StyledGoogleLoginButton>
    );
};
