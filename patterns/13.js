// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 

const n = 5
let res = ''
let count = 1

for (let i = 0 ; i < n ; i++) {

    for (let j = 0; j <= i; j++) {
    res+= `${count} `
        count++;
    }
    res+= '\n'

}

console.log(res);