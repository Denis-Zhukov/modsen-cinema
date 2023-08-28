import 'colorthief';

declare module 'colorthief' {
    export function getPalette(sourceImage: string, colorCount?: number, quality?: number): Promise<[number, number, number][]>;
}
