// * * * *
// *     *
// *     *
// * * * *

const n = 4;
let res = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i == 0 || i == n - 1 || j == 0 || j == n - 1) res += "* ";
        else res += "  ";
    }
    res += "\n";
}

console.log(res);
