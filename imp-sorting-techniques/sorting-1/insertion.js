const arr = [13, 8, 24, 52, 20, 9];

for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let curr = arr[i];
    while (j >= 0 && arr[j] > curr) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = curr;
}
console.log(arr);
