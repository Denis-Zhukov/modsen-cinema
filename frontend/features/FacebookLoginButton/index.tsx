import { FaFacebook } from 'react-icons/fa';

import { StyledFacebookLoginButton } from '@/features/FacebookLoginButton/styled';
import { useTranslations } from "next-intl";

export const FacebookLoginButton = () => {
    const googleLogin = async () => {
        try {
            window.open('http://localhost:8000/api/auth/facebook', '_self');
        } catch (ex) {
            alert(ex);
        }
    };

    const t = useTranslations();

    return (
        <StyledFacebookLoginButton type="button" onClick={googleLogin}>
            <FaFacebook/>
            {t('facebookAuth')}
        </StyledFacebookLoginButton>
    );
};
