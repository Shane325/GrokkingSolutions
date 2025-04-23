const { test } = require('./../test');

class Solution {
    cyclicSort(nums) {
        let i = 0;
        while (i < nums.length) {
            let j = nums[i] - 1;
            if (nums[i] != nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            } else {
                i++;
            }
        }
        return nums;
    }
}

const s = new Solution();

test(
    'should return [1, 2, 3, 4, 5]',
    s.cyclicSort([3, 1, 5, 4, 2]),
    [1, 2, 3, 4, 5]
);

test(
    'should return [1, 2, 3, 4, 5, 6]',
    s.cyclicSort([2, 6, 4, 3, 1, 5]),
    [1, 2, 3, 4, 5, 6]
);

test(
    'should return [1, 2, 3, 4, 5, 6]',
    s.cyclicSort([1, 5, 6, 4, 3, 2]),
    [1, 2, 3, 4, 5, 6]
);
