const { test } = require('./../test');

class Solution {
    dutchNationalFlag(arr) {
        let low = 0;
        let i = 0;
        let high = arr.length - 1;
        while (i <= high) {
            if (arr[i] === 0) {
                [arr[i], arr[low]] = [arr[low], arr[i]];
                low++;
                i++;
            } else if (arr[i] === 1) {
                i++;
            } else {
                [arr[i], arr[high]] = [arr[high], arr[i]];
                high--;
            }
        }

        return arr;
    }
}

const s = new Solution();

test(
    'should return [0, 0, 1, 1, 2, 2]',
    s.dutchNationalFlag([1, 2, 2, 0, 1, 0]),
    [0, 0, 1, 1, 2, 2]
)
test(
    'should return [0, 0, 1, 1, 2]',
    s.dutchNationalFlag([1, 0, 2, 1, 0]),
    [0, 0, 1, 1, 2]
)
test(
    'should return [0, 0, 1, 2, 2, 2]',
    s.dutchNationalFlag([2, 2, 0, 1, 2, 0]),
    [0, 0, 1, 2, 2, 2]
)
