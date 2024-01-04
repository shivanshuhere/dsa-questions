let n = 1634;

let str = "" + n;
let len = str.length;
let checkNum = 0;
for (let i = 0; i < len; i++) {
    checkNum += Math.pow(parseInt(str[i]), len);
}

if (checkNum == n) console.log("Armstrong");
else console.log("Not armstrong");
