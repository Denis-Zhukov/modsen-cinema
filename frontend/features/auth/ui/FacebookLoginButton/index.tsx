import { useTranslations } from 'next-intl';
import { FaFacebook } from 'react-icons/fa';

import { StyledFacebookLoginButton } from '@/features/auth/ui/FacebookLoginButton/styled';

import { facebookLogin } from '../../model/facebook-login';

export const FacebookLoginButton = () => {
    const t = useTranslations();

    return (
        <StyledFacebookLoginButton type="button" onClick={facebookLogin}>
            <FaFacebook/>
            {t('facebookAuth')}
        </StyledFacebookLoginButton>
    );
};
