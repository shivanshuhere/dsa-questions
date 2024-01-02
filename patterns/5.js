const n = 9

let res = ''

for (let i = n; i > 0 ; i--) {
    for (let j = i; j > 0; j--) {
        res += '* '
    }
    res += '\n'
}

console.log(res)


// * * * * * * * * * 
// * * * * * * * * 
// * * * * * * * 
// * * * * * * 
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 