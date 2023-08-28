import * as ColorThief from 'colorthief';

export class ColorUtils {
    static getMainColors(imgURL: string, countColor: number) {
        return ColorThief.getPalette(imgURL, countColor);
    }
}
