const merge = (left, right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] > right[rightIndex]) {
            result.push(right[rightIndex]);
            rightIndex++;
        } else {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)); // if array are not of same sizes , this will push remaining elements form each array
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr; // already sorted
    let mid = 0,
        left = [],
        right = [];
    mid = Math.floor(arr.length / 2);
    left = arr.slice(0, mid);
    right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
};

const arr = [4, 2, 1, 6, 7];

const sortedArr = mergeSort(arr);
console.log(sortedArr);
