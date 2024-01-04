const revNum = (num) => {
    let str = num.toString().split("").reverse().join("");

    if (num > 0) return parseInt(str);
    else if (Math.pow(2, 31) < parseInt(str)) return 0;
    else return parseInt("-" + str);
};
let res = revNum(987654321);

console.log(res);
