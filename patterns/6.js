// 12345678
// 1234567
// 123456
// 12345
// 1234
// 123
// 12
// 1

const n = 8

let res = ''

for (let j = n; j > 0 ; j--) {
    for (let i = 1; i <= j; i++){
        res += i
}
    res+= '\n'
}
console.log(res);