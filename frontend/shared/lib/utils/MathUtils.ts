export class MathUtils {
    static generateCyclesItems(items: number[], centralIndex: number, count: number) {
        const result = [];

        const low = Math.ceil(count / 2) - count;
        const high = count - Math.ceil(count / 2);

        for (let i = low; i <= high; i += 1) {
            const index = (centralIndex + i + items.length) % items.length;
            result.push(items[index]);
        }

        return result;
    }
}
