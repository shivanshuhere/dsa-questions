//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************


const n = 7

let res = ''

for (let i =0; i < n; i++) {

    for (let j = 0; j < n-i-1; j++)
    {
        res += ' '
    }

    for (let j = 0; j < 2*i+1; j++)
    {
        res += '*'
    }


    res += '\n'
}

console.log(res);