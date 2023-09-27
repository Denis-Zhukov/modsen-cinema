import { Urls } from '@/shared/config/constants/Urls';
import { CookieUtils } from '@/shared/lib/utils/CookieUtils';

export const googleLogin = () => {
    CookieUtils.setCookie('from', window.location.href, 1);
    window.open(Urls.LOGIN_GOOGLE, '_self');
};
