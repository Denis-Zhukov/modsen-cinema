import { LocalStorageItems } from '@/shared/typing/constants/LocalStorageItems';

export class Storage {
    static setAccessToken = (value: string) => localStorage.setItem(LocalStorageItems.accessToken, value);

    static getAccessToken = () => localStorage.getItem(LocalStorageItems.accessToken);

    static removeAccessToken = () => localStorage.removeItem(LocalStorageItems.accessToken);

    static setTheme = (theme: string) => localStorage.setItem(LocalStorageItems.theme, theme);

    static getTheme = () => localStorage.getItem(LocalStorageItems.theme) as 'light' | 'dark';
}
