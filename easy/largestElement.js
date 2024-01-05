const arr = [2, 5, 1, 3, 0];

function largestNum(array) {
    let largest = 0;
    for (let i = 0; i < array.length; i++) {
        if (largest < array[i]) largest = array[i];
    }
    return largest;
}

let lar = largestNum(arr);
console.log(lar);
