//      *
//     ***
//    *****
//   *******
//   *******
//    *****
//     ***
//      *


const  n = 4

let res = ''

for (let i = 0 ; i < n; i++) {
    // space 
    for (let j = 0; j < n-i-1; j ++) {
        res += ' '
    }
    // star 
    for (let j = 0; j < 2*i +1 ; j++ ) {
        res += '*'
    }
    res += '\n'
}


for (let i = n; i > 0; i--) {
    // space 
    for ( let j = 0 ; j < n-i; j++) {
        res += ' '
    }
    //star 
    for (let j = 0 ; j < i*2 -1; j ++) {
        res += '*'
    }
    res += '\n'
}


console.log(res);