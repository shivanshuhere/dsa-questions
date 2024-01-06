const arr = [13, 8, 24, 52, 20, 9];
const n = arr.length;

for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > curr) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = curr;
}

console.log(arr);
