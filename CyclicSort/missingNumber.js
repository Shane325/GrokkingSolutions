const { test } = require('./../test');

class Solution {
    missingNumber(nums) {
        const n = nums.length;
        let i = 0;
        while (i < n) {
            let j = nums[i];
            if (nums[i] != nums[j] && nums[i] < n) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            } else {
                i++;
            }
        }
        for (let i = 0; i < n; i++) {
            if (nums[i] != i) {
                return i;
            }
        }

        return n;
    }
}

const s = new Solution();

test(
    'should return 2',
    s.missingNumber([4, 0, 3, 1]),
    2
);

test(
    'should return 7',
    s.missingNumber([8, 3, 5, 2, 4, 6, 0, 1]),
    7
);
