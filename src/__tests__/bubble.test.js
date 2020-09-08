import {describe, expect, test} from '@jest/globals';
import bubbleSort from '../bubble';

describe('Bubble Sort', () => {
    test('[4, 2, 3, 1, 9] -> [1, 2, 3, 4, 9]', () => {
        var arr = [4, 2, 3, 1, 9];
        var result = [1, 2, 3, 4, 9];
        expect(bubbleSort(arr)).toEqual(result);
    });

    test('[-10, -20, 1, 0, 9] -> [-20, -10, 0, 1, 9]', () => {
        var arr = [-10, -20, 1, 0, 9];
        var result = [-20, -10, 0, 1, 9];
        var wrongResult = [1, -20, -10, 1, 9]
        expect(bubbleSort(arr)).toEqual(result);
        expect(bubbleSort(arr)).not.toEqual(wrongResult);
    });

    test('[0, 0, 0] -> [0, 0, 0]', () => {
        var arr = [0, 0, 0];
        var result = [0, 0, 0];
        expect(bubbleSort(arr)).toEqual(result);
    });
});
