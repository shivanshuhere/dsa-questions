const n = 54;

const oneToN = (num) => {
    if (num > 0) {
        oneToN(num - 1);
        console.log(num);
    }
};

oneToN(n);
