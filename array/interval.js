const intervals = [
    [1, 5],
    [6, 10],
    [10, 16],
];
const res = [];
for (let i = 0; i < intervals.length; i++) {
    let j = i + 1;

    if (intervals[i][1] >= intervals[j][0] && i < intervals.length - 1) {
        res.push([intervals[i][0], intervals[j][1]]);
        i++;
    } else {
        res.push(intervals[i]);
    }
}

console.log(res);
