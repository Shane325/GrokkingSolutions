const { test } = require('./../test');

class Solution {
    tripletSumCloseToTarget(arr, targetSum) {
        let smallestSum = Infinity;
        arr.sort((a, b) => a - b);
        for (let i = 0; i < arr.length - 2; i++) {
            let left = i + 1;
            let right = arr.length - 1;
            while (left < right) {
                let currentSum = arr[i] + arr[left] + arr[right];
                if (Math.abs(targetSum - currentSum) < Math.abs(targetSum - smallestSum)) {
                    smallestSum = currentSum;
                } else if (Math.abs(targetSum - currentSum) === Math.abs(targetSum - smallestSum)) {
                    smallestSum = Math.min(smallestSum, currentSum);
                }

                if (currentSum < targetSum) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return smallestSum;
    }
}

const s = new Solution();

test(
    'should return 2',
    s.tripletSumCloseToTarget([-1, 0, 2, 3], 3),
    2
);
test(
    'should return 0',
    s.tripletSumCloseToTarget([-3, -1, 1, 2], 1),
    0
);
test(
    'should return 3',
    s.tripletSumCloseToTarget([1, 0, 1, 1], 100),
    3
);
test(
    'should return 4',
    s.tripletSumCloseToTarget([6, 0, 1, 0, 2, 1], 5),
    4
);
