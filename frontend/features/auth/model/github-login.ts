import { Urls } from '@/shared/config/constants/Urls';
import { CookieUtils } from '@/shared/lib/utils/CookieUtils';

export const githubLogin = () => {
    CookieUtils.setCookie('from', window.location.href, 1);
    window.open(Urls.LOGIN_GITHUB, '_self');
};
