// *************
//  ***********
//   *********
//    *******
//     *****
//      ***
//       *

const n = 7

let res = ''

for(let i =0; i < n; i++) {
    //space
    for (let j = 0; j < i; j++) {
        res += ' '
    }
    
    for(let j = 0; j < (n-i)*2-1; j++) {
        res += '*'
    }
    res += '\n'
}

console.log(res);

