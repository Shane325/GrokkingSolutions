const { test } = require('./../test');

class Solution {
    stringCompare(str1, str2) {
        let i = str1.length - 1;
        let j = str2.length - 1;
        while (i >= 0 || j >= 0) {
            i = this.getNextValidChar(str1, i);
            j = this.getNextValidChar(str2, j);
            if (i < 0 && j < 0) {
                return true;
            } else if (i < 0 || j < 0) {
                return false;
            } else if (str1[i] !== str2[j]) {
                return false;
            }
            i--;
            j--;
        }
        return true;
    }

    getNextValidChar(str, index) {
        let count = 0;
        while (index >= 0) {
            if (str[index] === "#") {
                count++;
            } else if (count > 0) {
                count--;
            } else {
                break;
            }
            index--;
        }

        return index;
    }
}

const s = new Solution();

test(
    'should return true',
    s.stringCompare('xy#z', 'xzz#'),
    true
);

test(
    'should return false',
    s.stringCompare('xy#z', 'xyz#'),
    false
);

test(
    'should return true',
    s.stringCompare('xp#', 'xyz##'),
    true
);

test(
    'should return true',
    s.stringCompare('sf#h#a#nj#e', 'sha##ne'),
    true
);

test(
    'should return false',
    s.stringCompare('shane', 'sh#ane'),
    false
);
