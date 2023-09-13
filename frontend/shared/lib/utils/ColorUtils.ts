import { getPalette } from 'colorthief';

export class ColorUtils {
    static getMainColors(imgURL: string, countColor: number) {
        return getPalette(imgURL, countColor);
    }
}
