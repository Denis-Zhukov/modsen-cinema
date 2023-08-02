// @ts-ignore
import * as ColorThief from 'colorthief';

export const getMainColors = async (imgURL: string, countColor: number) => ColorThief.getPalette(imgURL, countColor) as [number, number, number][];
