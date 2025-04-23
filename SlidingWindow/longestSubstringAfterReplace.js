const { test } = require('./../test');

class Solution {
    longestSubstringAfterReplace(str, k) {
        let maxLength = 0;
        let maxLetterFreq = 0;
        let letterFreq = {};
        let start = 0;
        for (let end = 0; end < str.length; end++) {
            if(!(str[end] in letterFreq)) {
                letterFreq[str[end]] = 0;
            }
            letterFreq[str[end]]++;
            maxLetterFreq = Math.max(maxLetterFreq, letterFreq[str[end]]);
            if ((end - start + 1) - maxLetterFreq > k) {
                letterFreq[str[start]]--;
                start++;
            }

            maxLength = Math.max(maxLength, end - start + 1);
        }

        return maxLength;
    }
}

const s = new Solution();

test(
    'should return 5',
    s.longestSubstringAfterReplace('aabccbb', 2),
    5
);

test(
    'should return 4',
    s.longestSubstringAfterReplace('abbcb', 1),
    4
);

test(
    'should return 3',
    s.longestSubstringAfterReplace('abccde', 1),
    3
);
