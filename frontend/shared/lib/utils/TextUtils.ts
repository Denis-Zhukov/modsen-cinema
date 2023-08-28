export class TextUtils {
    static getEndingWordByPlural(number: number) {
        if (number === 0) return '';
        if (number === 1) return 'о';
        if (number >= 2 && number <= 4) return 'а';
        if (number >= 5 && number <= 20) return '';
        const lastDigit = number % 10;
        if (lastDigit === 1) return 'о';
        if (lastDigit >= 2 && lastDigit <= 4) return 'а';
        return '';
    }
}
