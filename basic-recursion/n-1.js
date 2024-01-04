const n = 5;

const nToOne = (num) => {
    if (num > 0) {
        console.log(num);
        nToOne(num - 1);
    }
};

nToOne(n);
