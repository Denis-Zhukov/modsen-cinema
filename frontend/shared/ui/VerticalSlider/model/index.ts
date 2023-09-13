export const getThreeElements = <T>(arr: T[], index: number) => {
    if (index < 0 || index >= arr.length) return [];

    const left = (index - 1 + arr.length) % arr.length;
    const right = (index + 1) % arr.length;

    if (arr.length === 1) return [arr[0]];
    if (arr.length === 2) return [arr[left], arr[index]];
    return [arr[left], arr[index], arr[right]];
};
