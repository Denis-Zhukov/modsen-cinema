import { Urls } from '@/shared/config/constants/Urls';

export const googleLogin = () => {
    window.open(Urls.LOGIN_GOOGLE, '_self');
};
