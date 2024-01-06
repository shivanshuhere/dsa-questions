const arr = [13, 46, 24, 52, 20, 9];

for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[min] > arr[j]) min = j;
        if (min != i) {
            let tmp = arr[min];
            arr[min] = arr[i];
            arr[i] = tmp;
        }
    }
}

console.log(arr);
