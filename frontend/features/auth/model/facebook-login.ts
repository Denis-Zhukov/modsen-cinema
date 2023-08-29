import { Urls } from '@/shared/config/constants/Urls';

export const facebookLogin = () => {
    window.open(Urls.LOGIN_FACEBOOK, '_self');
};
