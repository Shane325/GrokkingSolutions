const { test } = require('./../test');

class Solution {
    isHappyNumber(num) {
        let slow = num;
        let fast = num;
        while(true) {
            slow = this.getSumOfSquares(slow);
            fast = this.getSumOfSquares(this.getSumOfSquares(fast));
            if (slow === fast) {
                break;
            }
        }
        return slow === 1;
    }

    getSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }
}

const s = new Solution();

test(
    'should return true',
    s.isHappyNumber(23),
    true
)

test(
    'should return false',
    s.isHappyNumber(12),
    false
)
