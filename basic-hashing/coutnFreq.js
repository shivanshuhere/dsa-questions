// const arr = [10, 5, 10, 15, 10, 5];
const str = [true, false, true, false, true, true, true, false]; //works for both strings , numbers, bools

hash = {};
for (let i = 0; i < str.length; i++) {
    if (!hash[str[i]]) hash[str[i]] = 1;
    else hash[str[i]] += 1;
}

console.log(hash);
