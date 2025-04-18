const { test } = require('./../test');

class Solution {
    findMaxSumSubArray(arr, k) {
        let max = -Infinity;
        let sum = 0;
        let start = 0;
        for (let end = 0; end < arr.length; end++) {
            sum += arr[end];
            if ((end - start) + 1 >= k) {
                max = Math.max(max, sum);
                sum -= arr[start];
                start++;
            }
        }
        return max;
    }
}

const s = new Solution();

test(
    'should return 9',
    s.findMaxSumSubArray([2, 1, 5, 1, 3, 2], 3),
    9
);

test(
    'should return 7',
    s.findMaxSumSubArray([2, 3, 4, 1, 5], 2),
    7
);

