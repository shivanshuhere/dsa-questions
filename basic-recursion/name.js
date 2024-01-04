const name = "shivu";
const n = 5;
const printName = (str, n) => {
    if (n > 0) {
        console.log(str);
        printName(str, n - 1);
    }
};

printName(name, n);
