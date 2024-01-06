const arr = [13, 46, 24, 52, 20, 9];
const n = arr.length;

for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        if (arr[i] > arr[j]) {
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}
console.log(arr);
