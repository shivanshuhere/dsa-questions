const arr = [2, 2, 3, 4, 4, 2];
let hash = {};
for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) hash[arr[i]] += 1;
    else hash[arr[i]] = 1;
}

const hashArr = Object.entries(hash);

hashArr.sort((a, b) => a[1] - b[1]);

console.log(
    `Max freq : ${hashArr[hashArr.length - 1][0]}\nMin freq : ${hashArr[0][0]}`
);
