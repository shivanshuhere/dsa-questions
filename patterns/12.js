// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321


const n = 5
let res = ''

for (let i = 1; i <= n; i++) {

  for (let j = 1; j <= n ; j++){
    if (j <= i) res += j
    else res += ' '
  }


  // space
  for (let j = n; j >= 1; j--){
   if (j > i) res+= ' '
   else res+= j
  }


  
    res += '\n'
}

console.log(res);