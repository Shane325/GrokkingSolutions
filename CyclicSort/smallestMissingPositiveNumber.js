const { test } = require('./../test');

class Solution {
    missingNumber(nums) {
        let i = 0;
        while (i < nums.length) {
            let j = nums[i] - 1;
            if (nums[i] > 0 && nums[i] != nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            } else {
                i++;
            }
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] != i + 1) {
                return i + 1;
            }
        }
        return nums.length + 1;
    }
}

const s = new Solution();

test(
    'should return 3',
    s.missingNumber([-3, 1, 5, 4, 2]),
    3
);

test(
    'should return 4',
    s.missingNumber([3, -2, 0, 1, 2]),
    4
);

test(
    'should return 4',
    s.missingNumber([3, 2, 5, 1]),
    4
);

test(
    'should return 1',
    s.missingNumber([33, 37, 5]),
    1
);
