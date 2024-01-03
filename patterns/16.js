const n = 4
let res = ''
let A = 65;

for (let i = 0; i < n; i++) {
    for(let j = 0; j <= i; j++) {
        res += String.fromCharCode(A) + ' '
    }
    A++
    res += '\n'
}

console.log(res);