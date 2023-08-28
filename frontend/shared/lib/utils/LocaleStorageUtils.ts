import { LocalStorageItems } from '@/shared/config/constants/LocalStorageItems';

export class LocaleStorageUtils {
    static setAccessToken = (value: string) => localStorage.setItem(LocalStorageItems.accessToken, value);

    static getAccessToken = () => localStorage.getItem(LocalStorageItems.accessToken);

    static removeAccessToken = () => localStorage.removeItem(LocalStorageItems.accessToken);
}
