// F
// EF
// DEF
// CDEF
// BCDEF
// ABCDEF




const n = 6
let res = ''
let A = 65 + n -1 // last alphabet
res = ''
for (let i =0; i < n; i++) {
    res = ''
    for (let j =0 ; j <= i; j++) {
        res =  String.fromCharCode(A-j) + res
    }
    console.log(res);
}
