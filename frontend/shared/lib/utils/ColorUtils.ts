import { getPaletteFromURL } from 'color-thief-node';

export class ColorUtils {
    static getMainColors(imgURL: string, countColor: number) {
        return getPaletteFromURL(imgURL, countColor);
    }
}
