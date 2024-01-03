// 1
// 01
// 101
// 0101

const n = 4

let res = ''
let num = 1
for (let i = 0 ; i < n; i++) {
    if (i%2 == 0) num = 0
    else num = 1
    num = Number(!num)
    for (let j = 0; j <= i; j++) {
        res += `${num}`
        num = Number(!num)
    }
    res += '\n'
}
console.log(res);
