let x = 4,
    y = 8;
let gcd = 1;

for (let i = 1; i <= Math.min(x, y); i++) {
    if (x % i == 0 && y % i == 0) gcd = i;
}

console.log(`gcd of ${x} and ${y} is : ${gcd}`);
