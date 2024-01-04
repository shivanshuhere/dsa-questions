const prime = (num) => {
    if (num < 2) return false;
    if (num == 2) return true;
    else {
        for (let i = 2; i < num / 2; i++) {
            //sq root optimal approact-- takes less time
            if (num % i == 0) return false;
        }
        return true;
    }
};

let res = prime(2);
console.log(res);
res = prime(13);
console.log(res);
