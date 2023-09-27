import { Urls } from '@/shared/config/constants/Urls';
import { CookieUtils } from '@/shared/lib/utils/CookieUtils';

export const facebookLogin = () => {
    CookieUtils.setCookie('from', window.location.href, 1);
    window.open(Urls.LOGIN_FACEBOOK, '_self', '');
};
