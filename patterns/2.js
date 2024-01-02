const n = 5
let res = ''

for (let i =0; i<n; i++) {
    for (let j =0 ; j <= i; j++){
        res+= '*'
    }
    res+='\n'
}

console.log(res)

// *
// **
// ***
// ****
// *****