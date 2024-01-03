// ABCD
// ABC
// AB
// A

const n = 4
let res = ''


for (let i = 0; i < n; i++ ) {
    let A = 65
    for (let j = n; j > i; j--) {
        res += `${String.fromCharCode(A++)}`
    }
    res += '\n'
}

console.log(res);