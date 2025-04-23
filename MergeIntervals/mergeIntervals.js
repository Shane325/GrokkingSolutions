const Interval = require('./../Interval');
const { test } = require('./../test');

class Solution {
    mergeIntervals(intervals) {
        if (intervals.length < 2) {
            return intervals;
        }
        intervals.sort((a, b) => a.start - b.start);
        const mergedIntervals = [];
        let start = intervals[0].start;
        let end = intervals[0].end;
        for (let i = 1; i < intervals.length; i++) {
            if (end >= intervals[i].start) {
                end = Math.max(end, intervals[i].end);
            } else {
                mergedIntervals.push(new Interval(start, end));
                start = intervals[i].start;
                end = intervals[i].end;
            }
        }

        mergedIntervals.push(new Interval(start, end));
        return mergedIntervals;
    }
}

const s = new Solution();
const a = new Interval(1, 4);
const b = new Interval(2, 5);
const c = new Interval(7, 9);

test(
    'should return [1,5][7,9]',
    s.mergeIntervals([a, b, c]),
    [new Interval(1, 5), new Interval(7, 9)]
);

const d = new Interval(6, 7);
const e = new Interval(2, 4);
const f = new Interval(5, 9);

test(
    'should return [2,4][5,9]',
    s.mergeIntervals([d, e, f]),
    [new Interval(2, 4), new Interval(5, 9)]
);

const g = new Interval(1, 4);
const h = new Interval(2, 6);
const i = new Interval(3, 5);

test(
    'should return [1,6]',
    s.mergeIntervals([g, h, i]),
    [new Interval(1, 6)]
);
