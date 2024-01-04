const n = 4;

const factorial = (num) => {
    if (num == 1) return 1; //base
    return num * factorial(num - 1);
};

let res = factorial(n);
console.log(res);
