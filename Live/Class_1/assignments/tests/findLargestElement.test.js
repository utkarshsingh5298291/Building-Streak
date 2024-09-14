const findTheLargest = require('../findTheLargest');

describe('findTheLargest', () => {
    test('returns the largest element in the array', () => {
        expect(findTheLargest([3, 7, 2, 9, 1])).toBe(9);
        expect(findTheLargest([15, 27, 8, 12])).toBe(27);
        expect(findTheLargest([-5, -10, -2, -8])).toBe(-2);
        expect(findTheLargest([0, 0, 0, 0])).toBe(0);
    });

    test('works with arrays containing negative numbers', () => {
        expect(findTheLargest([-3, -7, -2, -9, -1])).toBe(-1);
        expect(findTheLargest([-15, -27, -8, -12])).toBe(-8);
    });

    test('works with arrays containing decimals', () => {
        expect(findTheLargest([3.5, 7.2, 2.1, 9.8, 1.9])).toBe(9.8);
        expect(findTheLargest([-3.5, -7.2, -2.1, -9.8, -1.9])).toBe(-1.9);
    });

    test('returns undefined for an empty array', () => {
        expect(findTheLargest([])).toBeUndefined();
    });
});