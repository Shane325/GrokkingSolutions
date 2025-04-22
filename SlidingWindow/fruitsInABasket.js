const { test } = require('./../test');

class Solution {
    fruitsInABasket(fruits) {
        let maxLength = 0;
        let fruitFrequency = {};
        let start = 0;
        for (let end = 0; end < fruits.length; end++) {
            if(!(fruits[end] in fruitFrequency)) {
                fruitFrequency[fruits[end]] = 0;
            }
            fruitFrequency[fruits[end]]++;

            while (Object.keys(fruitFrequency).length > 2) {
                fruitFrequency[fruits[start]]--;
                if (fruitFrequency[fruits[start]] === 0) {
                    delete fruitFrequency[fruits[start]];
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
    'should return 5',
    s.fruitsInABasket(['A', 'B', 'C', 'B', 'B', 'C']),
    5
);

test(
    'should return 3',
    s.fruitsInABasket(['A', 'B', 'C', 'A', 'C']),
    3
);
