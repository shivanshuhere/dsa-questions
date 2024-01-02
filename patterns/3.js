const n = 6

let res = ''

for (let i =1; i <= n; i++) {
    for (let j =1; j <= i; j++) { 
        res += j
    }
    res += '\n'

}

console.log(res)


// 1
// 12
// 123
// 1234
// 12345
// 123456