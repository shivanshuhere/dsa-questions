const n = 6

let res = ''


for (let i = 0; i < n; i++) {
    for (let j = 0 ; j <= i; j++ ) {
        res += '*'
    }
    res += '\n'
}

for (let i = n-1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        res += '*'
    }
    res += '\n'
}


console.log(res);