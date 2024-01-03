// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4

const n = 4;
let res = "";

for (let i = 0; i < n * 2 - 1; i++) {
    for (let j = 0; j < n * 2 - 1; j++) {
        let top = j;
        let left = i;
        let right = 2 * n - 2 - j;
        let bottom = 2 * n - 2 - i;

        let digit = n - Math.min(top, left, right, bottom); // calculate the min distance then convert to digit
        res += digit + " ";
    }
    res += "\n";
}
console.log(res);
