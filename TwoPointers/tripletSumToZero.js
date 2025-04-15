const { test } = require('./../test');  

class Solution {
    tripletSumToZero(arr) {
        const triplets = [];
        arr.sort((a, b) => a - b);
        for (let i = 0; i < arr.length - 2; i++) {
            if (i > 0 && arr[i] === arr[i - 1]) {
                continue;
            }
            this.searchPairs(arr, i + 1, -arr[i], triplets);
        }
        return triplets;
    }

    searchPairs(arr, left, targetSum, triplets) {
        let right = arr.length - 1;
        while (left < right) {
            let currentSum = arr[left] + arr[right];
            if (currentSum === targetSum) {
                triplets.push([-targetSum, arr[left], arr[right]]);
                left++;
                while (left < right && arr[left] === arr[left - 1]) {
                    left++;
                }
                right--;
                while (left < right && arr[right] === arr[right + 1]) {
                    right--;
                }
            } else if (currentSum < targetSum) {
                left++;
            } else {
                right--;
            }
        }
    }
}

const s = new Solution();

test(
    'should return [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]', 
    s.tripletSumToZero([-3, 0, 1, 2, -1, 1, -2]),
    [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
);
test(
    'should return [[-5, 2, 3], [-2, -1, 3]]',
    s.tripletSumToZero([-5, 2, -1, -2, 3]),
    [[-5, 2, 3], [-2, -1, 3]]
);
test(
    'should return [[0, 0, 0]]',
    s.tripletSumToZero([0, 0, 0]),
    [[0, 0, 0]]
);
