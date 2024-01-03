// *      *
// **    **
// ***  ***
// ********
// ***  ***
// **    **
// *      *

const n = 4
let res = ''

for (let i =0; i < n ; i++) {
    //star
    for (let j =0; j <= i ; j++) {
        res += '*'
    }

    //space 
    for(let j = 0; j< n-i-1; j ++) {
        res += ' '
    }

    //space 
    for(let j = 0; j< n-i-1; j ++) {
        res += ' '
    }

    //star
    for (let j =0; j <= i ; j++) {
        res += '*'
    }

    res += '\n'
}


// for (let i = 0; i < n-1; i++) {

// }

for (let i = n-2 ; i >= 0 ; i--) {
    //star
    for (let j =0; j <= i ; j++) {
        res += '*'
    }

    //space 
    for(let j = 0; j< n-i-1; j ++) {
        res += ' '
    }

    //space 
    for(let j = 0; j< n-i-1; j ++) {
        res += ' '
    }

    //star
    for (let j =0; j <= i ; j++) {
        res += '*'
    }

    res += '\n'
}


console.log(res);