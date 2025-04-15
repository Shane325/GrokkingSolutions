const { test } = require('./../test');

class Solution {
    tripletsWithSmallerSum(arr, target) {
        let count = 0;
        arr.sort((a, b) => a - b);
        for (let i = 0; i < arr.length - 2; i++) {
            count += this.countPairs(arr, i + 1, target - arr[i]);
        }
        return count;
    }

    countPairs(arr, left, target) {
        let count = 0;
        let right = arr.length - 1;
        while (left < right) {
            if (arr[left] + arr[right] < target) {
                count += right - left;
                left++;
            } else {
                right--;
            }
        }

        return count;
    }
}

const s = new Solution();

test(
    'should return 2',
    s.tripletsWithSmallerSum([3, 0, 2, -1], 3),
    2
);
test(
    'should return 4',
    s.tripletsWithSmallerSum([-1, 4, 2, 1, 3], 5),
    4
)
test(
    'should return 6',
    s.tripletsWithSmallerSum([2, 5, 4, 1, 3], 10),
    6
)
