const n = 10;
let sum = 0;
const sumOfFirstN = (num) => {
    if (num > 0) {
        sum += num;
        sumOfFirstN(num - 1);
    }
    return sum;
};
let res = sumOfFirstN(n);
console.log(res);
