const Interval = require('./../Interval');
const { test } = require('./../test');

class Solution {
    insertInterval(intervals, newInterval) {
        const merged = [];
        let i = 0;
        while (i < intervals.length && intervals[i].end < newInterval.start) {
            merged.push(intervals[i]);
            i++;
        }

        while (i < intervals.length && intervals[i].start <= newInterval.end) {
            newInterval.start = Math.min(newInterval.start, intervals[i].start);
            newInterval.end = Math.max(newInterval.end, intervals[i].end);
            i++;
        }
        merged.push(newInterval);

        while (i < intervals.length) {
            merged.push(intervals[i]);
            i++;
        }

        return merged;
    }
}

const s = new Solution();

test(
    'should return [1,3][4,7][8,12]',
    s.insertInterval([
        new Interval(1, 3),
        new Interval(5, 7),
        new Interval(8, 12),
    ], new Interval(4, 6)),
    [new Interval(1, 3), new Interval(4, 7), new Interval(8, 12)]
);

test(
    'should return [1,4][5,7]',
    s.insertInterval([
        new Interval(2, 3),
        new Interval(5, 7),
    ], new Interval(1, 4)),
    [new Interval(1, 4), new Interval(5, 7)]
);
