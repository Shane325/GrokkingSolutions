const { test } = require('./../test');

class Solution {
    longestSubstring(str, k) {
        let maxLength = 0;
        let start = 0;
        let charFrequency = {};
        for (let end = 0; end < str.length; end++) {
            if(!(str[end] in charFrequency)) {
                charFrequency[str[end]] = 0;
            }
            charFrequency[str[end]]++;

            while(Object.keys(charFrequency).length > k) {
                charFrequency[str[start]]--;
                if (charFrequency[str[start]] === 0) {
                    delete charFrequency[str[start]];
                }
                start++;
            }

            maxLength = Math.max(maxLength, end - start + 1);
        }

        return maxLength;
    }
}

const s = new Solution();

test(
    'should return 4',
    s.longestSubstring('araaci', 2),
    4
);

test(
    'should return 2',
    s.longestSubstring('araaci', 1),
    2
);

test(
    'should return 5',
    s.longestSubstring('cbbebi', 3),
    5
);
