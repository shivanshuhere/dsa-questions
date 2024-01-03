
// A 
// A B 
// A B C 
// A B C D 
// A B C D E 

const n = 5
let res = ''
let alpha = 65 // ascii value of A

for (let i = 0; i < n; i++) {

    for (let j = 0; j <= i; j++) {
        res += `${String.fromCharCode(alpha+j)} `
        
    }
    res += '\n'
}

console.log(res);