//      A
//     ABA
//    ABCBA
//   ABCDCBA
//  ABCDEDCBA


const n = 5
let res = ''

for (let i = 0; i < n; i++) {
    let A = 65
    //space
    for (let j = 0; j < n-i-1;j++ ) {
        res += ' '
    }
    //star
    for(let j = 0; j <= i; j++) {
        res += String.fromCharCode(A++)
    }

    //star

    A--
    for (let j = 0; j < i; j++) {
        res += String.fromCharCode(--A)
    }

    res += '\n'
}

console.log(res);